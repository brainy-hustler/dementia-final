"use client";
import { VideoData } from "@/staticVideos";
import { Box, Button, Card, CardMedia, Container, Grid, Typography } from "@mui/material"

interface VideosScreenProps {
    videos: VideoData[],
    tabNum: number,
    onTakeQuizClick: (videoNum:number) => void
}

export default function VideosScreen({videos,tabNum,onTakeQuizClick}: VideosScreenProps) {

    return (
    <Container>
       {videos.map((video, index) => (
        <Grid container columnSpacing={3} key={index}>
            <Grid item  xs={12} sm={4.5} md={6}>
                <Box sx={{pb: 4}}>
                    <Card> 
                        <CardMedia component="iframe" allowFullScreen
                        src={video.url} title={"video"+index}
                        sx={{height: '48vh'}}
                        />
                    </Card>    
                </Box>
            </Grid>
            <Grid item xs={12} sm={7.5} md={6}>
                <Box sx={{height: '48vh'}}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        {video.title}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {video.subtitle}
                    </Typography>
                    {(tabNum === 2) &&(<Box sx={{pt: 4}}>
                        <Button variant="contained" onClick={() => onTakeQuizClick(index)}>Take Quiz</Button>
                    </Box>)}
                </Box>
            </Grid>
        </Grid>
        ))}
        
    </Container>
  )
}