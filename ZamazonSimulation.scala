
import io.gatling.core.Predef._ // 2
import io.gatling.http.Predef._
import scala.concurrent.duration._

class TwitterSimulation extends Simulation { // 3

  val httpConf = http // 4
    .baseURL("http://ec2-54-93-69-190.eu-central-1.compute.amazonaws.com:8080") // 5
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // 6
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val twitterSCN = scenario("Twitter").exec(Tweet.tweet)

  setUp( // 11
    twitterSCN.inject(atOnceUsers(1)) // 12
  ).protocols(httpConf) // 13
}

object Tweet {

  val tweet = repeat(100, "n") {
		exec(http("add_tweet")
		.post("/ZamazonServer/REST/WebService/order?ref=1&quantity=1"))
    	.pause(1 milliseconds)
		.exec(http("get_tweet")
		.get("/ZamazonServer/REST/WebService/GetAllProducts"))
    	.pause(1 milliseconds)
  }
}
