Feature: Flights

    Background:
        Given I am on 'home' page

    Scenario Outline: Verify user can find tickets for flight in specified dates
        When I perform a flights search from <Departure Location> to <Arrival Location> in next dates: to - 26 July, return - 31 July
        Then 'flights' page should be displayed
        And I should see flights from <Departure Location> to <Arrival Location> and back in required dates

        Examples:
            | Departure Location           | Arrival Location             |
            | Oslo-All airports (OSLALL)   | Boston-All airports (BOSALL) |
            # | Vilnius (VNO)                | Helsinki (HEL)               |
            | Boston-All airports (BOSALL) | Helsinki (HEL)               |