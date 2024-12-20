import { Button, Heading, Flex, View } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom'; // import the useNavigate hook

const MainMenu = () => {

    const { user, signOut } = useAuthenticator();
    const navigate = useNavigate(); // initialize navigate

    // Main menu buttons
    const handleNewGame = () => {
        console.log('New game started!');
        navigate('/gameplay'); // navigate to the gameplay screen
    };

    const handleContinueGame = () => {
        console.log('Continuing game...');
        // Implement logic to continue the game if applicable
    };

    const handleLeaderboards = () => {
        console.log('Opening leaderboards...');
        // Implement logic for leaderboards here
    };

    const handleSettings = () => {
        console.log('Opening settings...');
        // Implement settings logic here
    };

    return (
        <View className="main-menu" padding = "2rem">
            <Flex direction="column" gap="1rem" alignItems="center">
                <Heading level={1}>Welcome, {user?.signInDetails?.loginId?.toUpperCase()}</Heading>

                <Button variation="primary" size="large" onClick={handleNewGame}>
                New Game
                </Button>

                <Button variation="primary" size="large" onClick={handleContinueGame}>
                Continue Game
                </Button>

                <Button variation="primary" size="large" onClick={handleLeaderboards}>
                Leaderboards
                </Button>

                <Button variation="primary" size="large" onClick={handleSettings}>
                Settings
                </Button>

                <Button variation="destructive" size="small" onClick={signOut}>
                Sign Out
                </Button>
            </Flex>
        </View>
  );
};

export default MainMenu;
