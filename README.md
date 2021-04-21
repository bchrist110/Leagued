# Leagued

Website: https://leaguedreact-ji6vi8syk-bchrist110.vercel.app/

## API Documentation
### Leagues

```
URL: /api/leagues
Method: GET
Success Response:
  -Code: 200
  -Content: JSON of all Leagues data
Error Response:
 -Code: 500
 -Content { error: { message: 'server error' } }
Sample Call:
  GET:  $.ajax({
            url: "/api/leagues",
            dataType: "json",
            type : "GET",
            success : function(r) {
              console.log(r);
            }
          });
```

### Teams

```
URL: /api/teams
Method: GET
Success Response:
  -Code: 200
  -Content: JSON of all Teams data
Error Response:
 -Code: 500
 -Content { error: { message: 'server error' } }
Sample Call:
  GET:  $.ajax({
            url: "/api/teams",
            dataType: "json",
            type : "GET",
            success : function(r) {
              console.log(r);
            }
          });
```

### Games

```
URL: /api/games
Method: GET | PATCH
Success Response for GET:
  -Code: 200
  -Content: JSON of all Games data
Error Response for GET:
 -Code: 500
 -Content { error: { message: 'server error' } }
Success Response for PATCH:
  -Code: 204
  -Content: No Content 
Error Response for PATCH:
  -Code: 400
  -Content: { error: { message: "Request body must contain missing element" } }
Sample Calls:
  GET:  $.ajax({
            url: "/api/games",
            dataType: "json",
            type : "GET",
            success : function(r) {
              console.log(r);
            }
          });
  PATCH:  $.ajax({
            url: "/api/games/${gameid}",
            type: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
            "hometeamscore": 2, 
            "hometeamassists": 1, 
            "hometeamthrees": 0, 
            "hometeamsteals": 1, 
            "hometeamblocks": 1,
            "awayteamscore": 2,
            "awayteamassists": 1,
            "awayteamthrees": 0,
            "awayteamsteals": 1,
            "awayteamblocks": 1
        })
            success : function(r) {
              console.log(r);
            }
          });   
```

### Players

```
URL: /api/players
Method: GET
Success Response:
  -Code: 200
  -Content: JSON of all Players data
Error Response:
 -Code: 500
 -Content { error: { message: 'server error' } }
Sample Call:
  GET:  $.ajax({
            url: "/api/players",
            dataType: "json",
            type : "GET",
            success : function(r) {
              console.log(r);
            }
          });
```

![Screenshot (29)](https://user-images.githubusercontent.com/70658734/115607203-8a5d5300-a299-11eb-9b53-6949c5028e10.png)

### Summary

A full-stack application used to help parents and children keep track of their youth basketball league.

### Technologies Used

-React.js
-Javascript
-Node.js
-PostgreSQL
-HTML5
-CSS3
-Express

All created by Brandon Christianson.

