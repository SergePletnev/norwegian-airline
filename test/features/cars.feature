Feature: Cars rent

    Background:
        Given I am on 'home' page

    Scenario: Verify user can find cars for rent in specified city and dates
        When I perform a search cars for rent with next filters: location - 'Vilnius Airport', date from - 26 July 00:00, date till - 31 July 01:00