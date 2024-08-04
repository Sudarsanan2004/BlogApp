import { Button, Card, CardActions, CardContent, CardMedia, colors, Typography } from '@mui/material'
import React from 'react'

// sx={{ maxWidth: 345 }}
const Home = () => {
  return (
    <div style={{backgroundColor:"white",display:"flex",height:"100vh"}}>
    <Card  style={{marginLeft:"50px",marginTop:"50px",width:"300px",height:"300px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        
        image="https://imgs.search.brave.com/szq_Ugy11XkkLmfONsDm1Nr9JTK82ojou86adW2JfXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YmFrZXItYmVhY2gt/c2FuLWZyYW5jaXNj/by1jYWxpZm9ybmlh/LXBob3RvLWJ5LXRy/ZXktaG9sbGlucy12/MC0zeGVxbjltMWJ1/NmQxLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9NGI4ZjI5/MzIxOTI4YTQ1ZGZi/ODg3ODgzMDlmZGZl/NWZiZjc5MjI1YQ"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Travel 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Travel the world
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small" style={{backgroundColor:"purple",color:"white"}} >DELETE</Button>
        <Button size="small" style={{backgroundColor:"purple",color:"white"}}>UPDATE</Button>
      </CardActions>
    </Card>

    <Card  style={{marginLeft:"50px",marginTop:"50px",width:"300px",height:"300px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://imgs.search.brave.com/Wooy8z4T7ABGCMewR3j7tqeXGrREP9z3gloe1PyFnyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8x/Mi8xNS8xNi80Ni9n/cmFmZml0aS01Njky/NjVfNjQwLmpwZw"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Art
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Art!!!!!!!!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small" style={{backgroundColor:"purple",color:"white"}} >DELETE</Button>
        <Button size="small" style={{backgroundColor:"purple",color:"white"}}>UPDATE</Button>
      </CardActions>
    </Card>

    <Card  style={{marginLeft:"50px",marginTop:"50px",width:"300px",height:"300px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://imgs.search.brave.com/qQT_kktOvuNHbDjoTrfNoB2pOt4JgzGOHiL_9P_f6NM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/aGlja2VuLXdpbmdz/LWJhcmJlY3VlLXN3/ZWV0bHktc291ci1z/YXVjZS1waWNuaWMt/c3VtbWVyLW1lbnUt/dGFzdHktZm9vZC10/b3Atdmlldy1mbGF0/LWxheV8yODI5LTY0/NzEuanBnP3NpemU9/NjI2JmV4dD1qcGc"
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          food
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Food is Art!!!!
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small" style={{backgroundColor:"purple",color:"white"}} >DELETE</Button>
        <Button size="small" style={{backgroundColor:"purple",color:"white"}}>UPDATE</Button>
      </CardActions>
    </Card>
    </div>
    
  )
}

export default Home