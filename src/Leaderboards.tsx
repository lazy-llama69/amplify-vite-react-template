import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Heading, View, Table, TableBody, TableCell, TableHead, TableRow, Flex } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

type LeaderboardEntry = {
  username: string;
  score: number;
  bossCount: number;
};

const Leaderboards = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/leaderboard");
      setLeaderboard(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <View padding="2rem">
      <Flex  direction="row" gap="0.5rem" justifyContent="center" alignItems="center">
        <Heading level={1}>Leaderboards</Heading>
      </Flex>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table variation="bordered">
          <TableHead textAlign='center'>
            <TableRow>
              <TableCell as="th" textAlign='center'>Rank</TableCell>
              <TableCell as="th" textAlign='center'>Username</TableCell>
              <TableCell as="th" textAlign='center'>Score</TableCell>
              <TableCell as="th" textAlign='center'>Bosses Killed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.map((entry, index) => (
              <TableRow key={index}>
                <TableCell textAlign='center'>{index + 1}</TableCell>
                <TableCell textAlign='center'>{entry.username}</TableCell>
                <TableCell textAlign='center'>{entry.score}</TableCell>
                <TableCell textAlign='center'>{entry.bossCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Flex direction="row" gap="0.5rem" justifyContent="center" alignItems="center" margin="1rem"> 
        <Button onClick={fetchLeaderboard}>Refresh</Button>
        <Button variation="primary" onClick={() => navigate("/")}>Return to main menu</Button>
      </Flex>
    </View>
  );
};

export default Leaderboards;
