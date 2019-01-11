Feature: Signup
  
  In order to play with VoX
  As a gambler
  I want to sign up to the system

  Scenario: Sign up new non existing user
    Given I haven't signed up
    Given my details are 'Bob' 'Lee', 'bob@lee.com', 'Password1!'
    When I sign up
    Then my account is created

  #Scenario: Sign up twice
  #  Given I signed up before
  #  When I sign up
  #  Given my details are 'Bob' 'Lee', 'bob@lee.com', 'Password1!'
  #  Then my account creation is rejected

