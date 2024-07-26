# Dogg Inn

## [See the App!](https://doggy-inn.netlify.app/)

## Description

Doggy Inn is the ideal app for finding reliable and loving dog sitters. Designed with both pet owners' and caregivers' needs in mind, our platform makes caring for your dog easy and safe.

#### [Client Repo here](https://github.com/Sheylare/doggyInn-app-client)
#### [Server Repo here](https://github.com/Sheylare/doggyInn-app-server)

## Technologies, Libraries & APIs used

Technologies used in the project: HTML, CSS, Javascript, React, axios, Bootstrap, etc.
Library used: Leaflet (https://leafletjs.com/index.html)

## Backlog Functionalities

- Create a CRUD for the host
- Apply the Cloudinary Library (https://cloudinary.com/) for dog owners to be able to upload a picture of their dog when making a reservation

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and search for hosts
**about** - As a user I want to be able to access the about page so that I see what the app is about and who made it
- **search hosts** - As a user I want to search hosts so that I can see all the hosts that are near me
- **hosts list** - As a user I want to see all the hosts available so that I can choose with who I want a reservation
- **reservation** - As a user I want to be able to make a reservation with the host I choose
- **reservations list** - As a user I want to see all the reservations that I made and be able to edit or delete them

## Admin Stories
**host registration** - As an admin of the webpage I want to register new hosts that are approved to take care of dogs

## Client Routes

## React Router Routes (React App)
| Path                                  | Page                  | Components      | Behavior                                                      |
| ------------------------------------- | --------------------- | --------------- | ------------------------------------------------------------- |
| `/`                                   | Home                  |                 | Home page                                                     |
| `/about`                              | About                 |                 | About page                                                    |
| `/buscar-hosts`                       | SearchHosts           |                 | Search hosts in map or search bar                             |
| `/hosts`                              | HostsList             | HostCard        | Navigate to HostCard when clicked                             |
| `/hosts/:hostId`                      | HostDetails           |                 | Shows host details                                            |
| `/hosts/:hostId/reserva`              | AddFormReservation    |                 | Create reservation form                                       |
| `/hosts/:hostId/reserva-completada`   | ConfirmedReservation  |                 | Navigate to ReservationsList or Homepage                      |
| `/reservas/:reservaId`                | EditFormReservation   |                 | Edit selected reservation                                     |
| `/reservas`                           | ReservationsList      | ReservationCard | Shows all reservations with the name of the host              |
| `/registrar-host`                     | HostRegistration      | LocationHost    | Create form to register new host                              |
| `/*`                                  | NotFound              |                 | Navigate to Homepage                                          |

## Other Components                               |

## Other Components

- Navbar
- Footer
  
## Links

### Collaborators

[Marcos Cardoza](https://github.com/Marcocar97)

[Michelle Sredni](https://github.com/michsredni)

[Sheyla Arellano](https://github.com/Sheylare)

### Slides

[Slides Link](https://shorturl.at/yh2m9)
