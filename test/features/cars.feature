# Feature: Cars rent

#     Background:
#         Given I am on "home" page

#     Scenario: Verify user can find cars for rent in specified city and dates
#         When I perform a cars search for rent with next filters: location - "Vilnius Airport", date from - "28" July 00:00, date till - "31" July 01:00
#         Then "cars" page should be displayed with title containing "Car"
#             And I should see cars to rent in "Vilnius Airport" from "28" July to "31" July with required filters information
