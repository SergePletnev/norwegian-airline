Feature: Flights

    Background:
        Given I am on "home" page

    Scenario Outline: Verify user can find tickets for flight in specified dates
        When I perform a flights search from "<Departure Location>" to "<Destination Location>" in next dates: departure - 26 July, return - 31 July
        Then "flights" page should be displayed with title containing "Flights"
            And I should see flights from "<Departure Location>" to "<Destination Location>" and back in required dates

        Examples:
            | Departure Location | Destination Location |
            | Oslo               | Boston               |
            | Vilnius            | Helsinki             |
            | Boston             | Helsinki             |