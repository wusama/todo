# GET /api/todo/:id
## desc
`get one item by id`
## request param
`id`: item id
## response
 `{ id, text, created, updated, done }`

# GET /api/todo
## desc
`get item list`
## request params
`{`<br>
&nbsp;&nbsp;&nbsp;&nbsp;`skip`: `int` // skip item count<br>
&nbsp;&nbsp;&nbsp;&nbsp;`take`: `int` // how many items response in the list<br>
`}`
## response
 `[{id,text,created,updated,done},{...}]`

# POST /api/todo
## desc
`create todo item`
## request params
`{ text: "todo describe text" }`
## response
 `{id}`

 
# DELETE /api/todo/:id
## desc
`delete todo item`
## request params
`id`: item id
## response
 `{ ok: true }`