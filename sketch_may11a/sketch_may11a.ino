#include <AuthClient.h>
#include <debug.h>
#include <MicroGear.h>
#include <MQTTClient.h>
#include <PubSubClient.h>
#include <SHA1.h>

#include <AuthClient.h>
#include <debug.h>
#include <MicroGear.h>
#include <MQTTClient.h>
#include <PubSubClient.h>
#include <SHA1.h>

#include <ESP8266WiFi.h>
#include <MicroGear.h>

const char* ssid     = "Aoffy_2.4G";
const char* password = "0980171683";

#define APPID   "FinalProjectCOVID"
#define KEY     "5YqZzgJeAi9CRe2"
#define SECRET  "6SY14hdZHcvwtxzSGQPMUiqAE"
#define ALIAS   "esp8266"
#define TargetWeb "WebHTML"

WiFiClient client;

MicroGear microgear(client);

/* If a new message arrives, do this */
void onMsghandler(char *topic, uint8_t* msg, unsigned int msglen) {

    
    Serial.print("Incoming message --> ");
    msg[msglen] = '\0';
    Serial.println((char *)msg);
    
}

/* When a microgear is connected, do this */
void onConnected(char *attribute, uint8_t* msg, unsigned int msglen) {
    Serial.println("Connected to NETPIE...");
    /* Set the alias of this microgear ALIAS */
    microgear.setAlias(ALIAS);
}


void setup() {
    /* Add Event listeners */
    /* Call onMsghandler() when new message arraives */
    microgear.on(MESSAGE,onMsghandler);

    /* Call onConnected() when NETPIE connection is established */
    microgear.on(CONNECTED,onConnected);

    Serial.begin(115200);
    Serial.println("Starting...");

    /* Initial WIFI, this is just a basic method to configure WIFI on ESP8266.                       */
    /* You may want to use other method that is more complicated, but provide better user experience */
    if (WiFi.begin(ssid, password)) {
        while (WiFi.status() != WL_CONNECTED) {
            delay(500);
            Serial.print(".");
        }
    }

    Serial.println("WiFi connected");  
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());

    /* Initial with KEY, SECRET and also set the ALIAS here */
    microgear.init(KEY,SECRET,ALIAS);

    /* connect to NETPIE to a specific APPID */
    microgear.connect(APPID);
}

void loop() {
    /* To check if the microgear is still connected */
    if (microgear.connected()) {
        //Serial.println("connected");
        
          microgear.loop();
          
            Serial.println("connected");
            
            if(Serial.available())
            {
                int num0 = Serial.parseInt();
                int num1 = Serial.parseInt();
                String data = String(num1) + "/" + String(num0) + "0";
                char msg[1024];
                data.toCharArray(msg,data.length());
                Serial.println(msg);
                //Serial.println(num0);
                //Serial.println(num1);
                //microgear.chat(TargetWeb,num0);
                //microgear.chat(TargetWeb,num1);
                microgear.chat(TargetWeb,msg);
              
            }
            
            
          //Serial.println("Data");
          //microgear.chat(TargetWeb,"Data");

       
  
    }
    else {
        Serial.println("connection lost, reconnect...");
        microgear.connect(APPID);
    }
    delay(1000);
}
