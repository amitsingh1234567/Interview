/*
Behavioral interview:-
Q.1 Tell me about yourself.
Q.2 Tell me about a project you're proud of.
Q.3 Tell me about a challenging project.
Q.4 Tell me about a time you worked under a tight deadline.
Q.5 Tell me about a conflict with a team member.
Q.6 Tell me about a mistake/failure you made.
Q.7 Tell me about a production issue you handled.
Q.8 Tell me about a time you disagreed with your senior/manager.
Q.9 Tell me about a time you took ownership.
Q.10 Tell me about a time you mentored/helped a junior developer
===================================================================================

Q.1 Suppose 1000 of user doing the registration at one time how will you handle that situation.
Q.2 What is the N+1 rule * => Done
Q.3 What is the CAP Theorem? * => DONE
Q.4 What is Idempotency?
Q.5 What is Horizontal Scaling vs Vertical Scaling?
Q.6 What is Caching?
Q.7 Cache Aside Pattern => Very common. => DONE
Q.7 What is a Load Balancer?
Q.8 Write Through vs Write Back Cache


Q.9 What is a Message Queue?
Q.10 What is a Dead Letter Queue?
Q.11 What is Event-Driven Architecture?
Q.12 What is API Gateway?
Q.13 What is Rate Limiting?
Q.14 What is Circuit Breaker?
Q.15 What is Retry with Exponential Backoff?
Q.16 What is Database Replication?
Q.17 What is Sharding?
Q.18 What is a Shard Key? How will you choose a shard key? => DONE
Q.19 What is Eventual Consistency?
Q.20 What is Strong Consistency?
Q.21 What is Sticky Session? => DONE
Q.22 What is Connection Pooling? * => DONE


Q.23 What is CDN? * => DONE
Q.24 What is WebSocket?
Q.25 What is Long Polling?
Q.26 What is Distributed Lock?
Q.27 What is Leader Election?
Q.28 What is High Availability?
Q.29 API Gateway vs Load-balancer * => DONE
Q.30 What is web server
Q.31 What is backend server




Top 10
Q.1 What are the key difference between state-full and state-less system
Q.2 What is load balancer
Q.3 What is fault tolerence, and how do you design the fault tolerence system
Q.4 What is caching and why it is important

Q.1 Database partition vs sharding * => DONE
Q.2 Type of http protocol like REST, SOP, GrapghQL or which approach you will use over the Dashboard *
Q.3 What are the design pattern ? * => DONE
Q.4 How can I assign the specific task to a separate thread using cluster. 
    for example i want to assign x task to in the one thread and y task to another thread 
Q.5 I have a wallet collection and in this collection I have user_id as foreign key 
    and I want the user info and the total amount in the wallet 

Q.6 I have 4 products and i am getting the 5 users request at the same time without any delay so 
    how can I ensure 4 user will the product and 5 will be get product un available /
    how can I ensure which user will get the product and which one will get the product 
    unavailable


Q.1 What is Even-driven Architecture in nodejs
Q.2 Different between process and thread *
Q.3 Error handling best ptactice in async code 

==============================================================================
Q.1 What is System design
Q.2 What are the key component of system design
Q.3 Vertical scalling vs horizantal scalling 
Q.4 Monolothic vs micro-service architecture => DONE
Q.5 How will you design a URL shortener like Bitly
Q.6 What is message Queue and why it is use => DONE
Q.7 How will you handle system failures in distributed enviroments?

Q.8 Design a chat application like WhatsApp
Q.9 Design a news feed system like facebook
Q.10 What is rate limit and why it is important 
Q.11 How will you design a file storage system like google drive
Q.12 What is Eventual Consistency and when it is acceptable
Q.13 Design an online ticket booking system
Q.14 How would you design Youtube or a large-scale video stream plateform 
Q.15 How will you design a distributed cahce system for large-scale application
Q.16 How will you design a distributed logging system like ELK Stack
Q.17 How will you design a payment processing system lke Paypal or strip
Q.18 What is pub/sub
Q.19 What is consistent hashing.




Singleton – Database connection, Angular services.

Observer – RxJS Observables, EventEmitter.

Strategy – Authentication and payment methods.

Factory – Creating different service implementations.

Chain of Responsibility – Express middleware, Angular interceptors.

Facade – Checkout or booking services that coordinate multiple modules.
*/


// Strategy Pattern
class EmailNotification {
  send(message) {
    console.log(`Email sent: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`SMS sent: ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`Push notification: ${message}`);
  }
}

// Context
class NotificationService {
  constructor(strategy) {
    this.strategy = strategy;
  }

  notify(message) {
    return this.strategy.send(message);
  }
}

// Usage
const emailService = new NotificationService(new EmailNotification());
emailService.notify("Welcome! Please verify your email.");

const smsService = new NotificationService(new SMSNotification());
smsService.notify("Your OTP is 123456.");

const pushService = new NotificationService(new PushNotification());
pushService.notify("You have a new friend request!");




// Factory
class EmailNotification {
  send(message) {
    console.log(`Email sent: ${message}`);
  }
}

class SMSNotification {
  send(message) {
    console.log(`SMS sent: ${message}`);
  }
}

class PushNotification {
  send(message) {
    console.log(`Push notification: ${message}`);
  }
}

class NotificationFactory {
  static create(type) {
    if (type === "email") {
      return new EmailNotification();
    }
    if (type === "sms") {
      return new SMSNotification();
    }
    if (type === "push") {
      return new PushNotification();
    }
    throw new Error("Invalid notification type");
  }
}

// Usage
const notification = NotificationFactory.create("sms");
notification.send("Your order has been shipped!");
