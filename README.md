# Petcraigslist

## Overview

_**Paws For Life** is an application where users can put pets up for adoption and can also see what pets are avalable to be adopted. Users can see pictures and detail information about each pet. Users are allowed to comment and leave info to be contacted._


<br>
## MVP
_The **Paws For Life** MVP is have a full Stack application using a back-end in Ruby on Rails and a fully fisnish front end using react. Demostrating understanding in CSS suing grid and/or flexbox to have a stablish brand for this application. 
_

<br>
### Goals

- _Have a working, interactive React app._
- _Consume data from your Ruby on Rails API._
- _Demonstrate Full CRUD actions._
- _Use Flexbox or Grid in my design._

<br>

### Libraries and Dependencies

> Front End

|    Library       | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is an open-source front-end JavaScript library for building user interfaces or UI components. ._ |
|   React Router   | _React Router is a standard library for routing in React.._ |
|  react-router-dom| _"A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your                        machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app."._ |
|     axios        | _Axios is a library that helps us make http requests to external resources. _ |



> Back End


|    Library       | Description                                |
| :--------------: | :----------------------------------------- |
|    gem 'rails'   | _Ruby on Rails is a full-stack web framework optimized for programmer happiness and sustainable productivity._ |
|    gem 'puma'    | _Puma is a small library that provides a very fast and concurrent HTTP 1.1 server for Ruby web applications. It is designed for running Rack                       apps only._ |
|   gem 'bcrypt'   | _he bcrypt Ruby gem provides a simple wrapper for safely handling passwords._ |
|  gem 'rack-cors' | _"Rack CORS Middleware. Rack::Cors provides support for Cross-Origin Resource Sharing (CORS) for Rack compatible web applications. The CORS                         spec allows web applications to make cross domain AJAX calls without using workarounds such as JSONP." _ |
|  gem 'pry-rails' | _This is a small gem which causes rails console to open pry. _ |

<br>

### Client (Front End)

#### Wireframes

>  Wireframes section to display desktop.
>  https://www.figma.com/file/noBruQmGODXEstgabO69ow/Adopt-your-pet?node-id=21%3A108


Screen Shot 2021-06-21 at 8.50.31 PM![Screen Shot 2021-06-21 at 8 50 31 PM](https://user-images.githubusercontent.com/81534592/122845847-90d86d00-d2d2-11eb-9d22-3fd01637895e.png)

Screen Shot 2021-06-21 at 8.50.41 PM![Screen Shot 2021-06-21 at 8 50 41 PM](https://user-images.githubusercontent.com/81534592/122845858-97ff7b00-d2d2-11eb-8428-193b7e5ff369.png)

Screen Shot 2021-06-21 at 8.50.53 PM![Screen Shot 2021-06-21 at 8 50 53 PM](https://user-images.githubusercontent.com/81534592/122845863-9c2b9880-d2d2-11eb-95ba-5f554794b73a.png)

Screen Shot 2021-06-21 at 8.51.01 PM![Screen Shot 2021-06-21 at 8 51 01 PM](https://user-images.githubusercontent.com/81534592/122845873-a057b600-d2d2-11eb-9972-ca86592e004e.png)

Screen Shot 2021-06-21 at 8.51.16 PM![Screen Shot 2021-06-21 at 8 51 16 PM](https://user-images.githubusercontent.com/81534592/122845884-a77ec400-d2d2-11eb-8255-17ef46de48a6.png)

Screen Shot 2021-06-21 at 8.51.25 PM![Screen Shot 2021-06-21 at 8 51 25 PM](https://user-images.githubusercontent.com/81534592/122845896-b4031c80-d2d2-11eb-9a7d-4f5e59d69e45.png)

Screen Shot 2021-06-21 at 8.51.34 PM![Screen Shot 2021-06-21 at 8 51 34 PM](https://user-images.githubusercontent.com/81534592/122845906-b82f3a00-d2d2-11eb-8ba4-3933ac89077c.png)

Screen Shot 2021-06-21 at 8.51.25 PM![Screen Shot 2021-06-21 at 8 51 25 PM](https://user-images.githubusercontent.com/81534592/122845889-aa79b480-d2d2-11eb-9ae7-514d66a4bd81.png)

Screen Shot 2021-06-21 at 8.51.45 PM![Screen Shot 2021-06-21 at 8 51 45 PM](https://user-images.githubusercontent.com/81534592/122845913-bc5b5780-d2d2-11eb-8b1b-365c0e95319c.png)

Screen Shot 2021-06-21 at 8.51.54 PM![Screen Shot 2021-06-21 at 8 51 54 PM](https://user-images.githubusercontent.com/81534592/122845918-bf564800-d2d2-11eb-9e58-769d94d55e14.png)
<br>

>  Wireframes section to display Media.

Screen Shot 2021-06-21 at 8.54.30 PM![Screen Shot 2021-06-21 at 8 54 30 PM](https://user-images.githubusercontent.com/81534592/122846057-0fcda580-d2d3-11eb-9c91-5f23f15a87f7.png)

Screen Shot 2021-06-21 at 8.54.46 PM![Screen Shot 2021-06-21 at 8 54 46 PM](https://user-images.githubusercontent.com/81534592/122846065-14925980-d2d3-11eb-9a9f-8a87cae2b360.png)

Screen Shot 2021-06-21 at 8.55.04 PM![Screen Shot 2021-06-21 at 8 55 04 PM](https://user-images.githubusercontent.com/81534592/122846072-19570d80-d2d3-11eb-8d5d-6cd5a08ac68a.png)

Screen Shot 2021-06-21 at 8.55.27 PM![Screen Shot 2021-06-21 at 8 55 27 PM](https://user-images.githubusercontent.com/81534592/122846083-1e1bc180-d2d3-11eb-8843-84f81af85500.png)

Screen Shot 2021-06-21 at 8.55.34 PM![Screen Shot 2021-06-21 at 8 55 34 PM](https://user-images.githubusercontent.com/81534592/122846093-2116b200-d2d3-11eb-9995-961ef113230b.png)



#### Component Tree
https://whimsical.com/adopt-your-pet-CcPxTmMF8mdSgBhY81xYUc

Screen Shot 2021-06-21 at 8.59.24 PM![Screen Shot 2021-06-21 at 8 59 24 PM](https://user-images.githubusercontent.com/81534592/122846330-9b473680-d2d3-11eb-8085-72fe1b37d5dc.png)


#### Component Architecture

Screen Shot 2021-06-21 at 8.58.02 PM![Screen Shot 2021-06-21 at 8 58 02 PM](https://user-images.githubusercontent.com/81534592/122846238-6935d480-d2d3-11eb-937c-cb73f1e5fbb4.png)


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model
https://app.diagrams.net/#G1bi-UjCeFkUbkOcx2s_RBL2U3WYkJ0dWq

Screen Shot 2021-06-21 at 9.02.00 PM![Screen Shot 2021-06-21 at 9 02 00 PM](https://user-images.githubusercontent.com/81534592/122846508-f7aa5600-d2d3-11eb-986c-6369306bee29.png)
***

## Post-MVP

> 

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

