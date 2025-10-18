import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'


const infoBox = ({info}) => {
    const COLD_URL = "https://images.unsplash.com/photo-1550077404-c00d89693129?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
    const  HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
    const RAINY_URL = "https://images.unsplash.com/photo-1501608607047-86552dbaccaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"


    return (
        <div className='Info'>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {info.temp}&deg;C<br />
                            Min Temp: {info.tempmin}&deg;C<br />
                            Max Temp: {info.tempmax}&deg;C<br />
                            Humidity: {info.humidity}&deg;C<br />
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C<br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default infoBox
