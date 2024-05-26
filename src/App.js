import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ActivityScreen from './components/ActivityScreen';
import FinalScreen from './components/FinalScreen';
import InstructionScreen from './components/InstructionScreen';
import IntroScreen from './components/IntroScreen';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/instructions" element={<InstructionScreen />} />
                <Route path="/game" element={<ActivityScreen />} />
                <Route path="/final" element={<FinalScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
