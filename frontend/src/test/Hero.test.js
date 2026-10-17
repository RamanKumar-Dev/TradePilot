import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from "../landing_page/home/Hero";


// Test Suite
describe('Hero Component', () => {
    test('Render hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('homeHero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "test-file-stub");
    });
});