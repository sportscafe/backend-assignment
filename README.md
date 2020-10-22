# Problem Statement

# Coupon service
* Build a coupon service with a set of rest APIs for any front end to integrate. Go to the APIs section to check the required APIs.
* Go to the rules section to check the conditions when the coupons can be issued to users and how they can be redeemed.
* This service should be able to handle burst traffic. 
   *  i.e. Say a Coupon goes live at 1 Noon, only 25 of them are available. They will be distributed on an FCFS basis. 
   *  As soon as the coupon goes live traffic of 100 of thousands of requests/minute could hit this service.
   *  Try to handle/implement at least some of the reliability and scalability problems if not all to manage this kind of burst traffic.

## Data Models
(Note: These are just guidelines feel free to add more entities or add more attributes for already described entities as per your architecture)
Use PostgreSQL for Database.

* ### user
  * every user has a unique id and a display name
  * add more attributes if necessary.

* ### coupon
  * every coupon has an unique id, code, message, description, start_time, expiry, count.
  * e.g coupon:
    * id = 1
    * code = FREE-IPHONE
    * message = Get a iPhone, Free!!
    * description: Fill 5 Litres of Petrol at any Nostra Petrol pump, to avail this offer.
    * expiry: date // till when the coupon in valid
    * start_time: date // when the coupon goes live
    * count: 10 // how many coupons can be distribulted after the coupon goes live

* ### user_coupon
  * user_id, coupon_id, used_date, is_used
  * When a coupon is issued to a user entry is made here.
  * When a user avails the offer data is an update


## Rules for distributing coupons:

1. Coupons can be issued post the start_time 
2. Only the prescribed number of coupons can be issued.
3. One user can get only one coupon in a day.
4. 3 different coupons will be made available in a day at different times with different coupon count.
5. Users can make use of coupons before the expiry time.

## APIs
   1. Create Coupon
   2. Get live Coupons
   3. Issue Coupon to a user
   4. Use a coupon

## Data assumptions
1. Pre-populate the users as necessary.

## System Requirements
1. 100 of thousands of user requests could simultaneously try to get themselves a coupon. 
2. System should distribute only the prescribed number of coupons.
3. System should be reliable 
4. System should be scalable

# 
# What are we looking for
1. System Design
2. DB design: LLD
3. Business logic, Algorithms
4. What are the scalability problems? How can they be addressed
5. What are reliability problems? How can they be addressed
6. Clean code
7. System need not necessarily be complete. However, it should follow the top 6 points mentioned. In the interview, you may explain the missing pieces.


#
# Setup

1. Clone this repo
2. run `npm i`
3. run `./sd`
4. run `cd api`
5. run `npm start`
6. Server is running at: [http://0.0.0.0:3000](http://0.0.0.0:3000)