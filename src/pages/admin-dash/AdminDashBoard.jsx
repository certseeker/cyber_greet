import React from 'react'

export default function AdminDashBoard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
        <h2>Add A Term</h2>
          <form action='Index' method="POST">
            Name: <input type="text" name="name" /><br/>
            Insert Image URL: <input type="url" name="imageLink" /><br/>
            <input type="submit" name="" value="Add Pokemon" />
          </form>
      </div>
  )
}



