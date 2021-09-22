/*
 * Copyright 2011-2021 GatlingCorp (https://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package computerdatabase.advanced

import java.util.concurrent.ThreadLocalRandom

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class homeworkExercise extends Simulation {


  //Inserting the information into the database
  object Insert {

    val feeder = csv("computerList.csv").queue


    val edit = repeat(2){
      exec(
      http("New pc window")
        .get("/computers/new")
    ).pause(1)
      .feed(feeder)
      .exec(
        http("Create new pc")
          .post("/computers")
          .formParam("name", "${pcName}")
          .formParam("introduced", "${introduced}")
          .formParam("discontinued", "${discontinued}")
          .formParam("company", "${company}") // Switched from "bigTech" parameters to IDs. (the webpage object is a dropdown box)
      )}
  }
// Search for the two entries we created by the name of the computers.
  object findValue {

    val feeder = csv("computerList.csv").queue
    val check = repeat(2) {
      exec(
        http("Homepage")
          .get("/")
      ).pause(1)
        .feed(feeder)
        .exec(
          http("Search")
            .get("/computers?f=pc")
            .check(css("a:contains('${pcName}')", "href").saveAs("computerURL"))
        )
        //Expecting 2 errors, there are no created computers since the page is readOnly
        .pause(1)
        .exec(
          http("Select")
            .get("${computerURL}")
            .check(status.is(200))
        )
        .pause(1)
    }
  }

// Lauch options
val httpProtocol = http
.baseUrl("http://computer-database.gatling.io")
.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
.doNotTrackHeader("1")
.acceptLanguageHeader("en-US,en;q=0.5")
.acceptEncodingHeader("gzip, deflate")
.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  //Administrator commands
val admins = scenario("Admins").exec(Insert.edit, findValue.check)


  //Setting up one admin user
setUp(
admins.inject(rampUsers(1).during(10.seconds))
).protocols(httpProtocol)
}
