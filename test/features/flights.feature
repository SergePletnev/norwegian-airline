Feature: Flights

    Background:
        Given I am on "home" page

    Scenario Outline: Verify user can find tickets for flight in specified dates
        When I perform a flights search from "<Departure Location>" to "<Destination Location>" in next dates: departure - "20" August, return - "26" August
        Then "flights" page should be displayed with title containing "Flights"
        And I should see flights from "<Departure Location>" to "<Destination Location>" on "28" August and back on on "31" August

        Examples:
            | Departure Location | Destination Location |
            | Oslo               | Boston               |
            | Oslo               | Helsinki             |
            | Boston             | Helsinki             |