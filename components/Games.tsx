import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PuzzleIcon from "@mui/icons-material/Extension";
import MemoryIcon from "@mui/icons-material/Memory";
import CrosswordIcon from "@mui/icons-material/Abc";
import SearchIcon from "@mui/icons-material/Search";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "@mui/material";

const games = [
  {
    name: "Sudoku",
    icon: <PuzzleIcon fontSize="large" />,
    url: "https://sudoku.com",
  },
  {
    name: "Memory Game",
    icon: <MemoryIcon fontSize="large" />,
    url: "https://www.memozor.com/memory-games",
  },
  {
    name: "Crossword Puzzles",
    icon: <CrosswordIcon fontSize="large" />,
    url: "https://www.dictionary.com/e/crossword/",
  },
  {
    name: "Brain Teasers",
    icon: <SportsEsportsIcon fontSize="large" />,
    url: "https://www.braingle.com/brainteasers/",
  },
  {
    name: "Word Search",
    icon: <SearchIcon fontSize="large" />,
    url: "https://thewordsearch.com",
  },
  {
    name: "Jigsaw Puzzles",
    icon: <LinkIcon fontSize="large" />,
    url: "https://www.jigsawplanet.com",
  },
];

const GamesScreen: React.FC = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Cognitive Games
        </Typography>
        <Grid container spacing={3}>
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                <IconButton
                  color="primary"
                  aria-label={game.name}
                  component={Link}
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {game.icon}
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {game.name}
                  </Typography>
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default GamesScreen;
