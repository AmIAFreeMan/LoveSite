import { Observable } from '@nativescript/core';

export function createViewModel() {
    const viewModel = new Observable();
    viewModel.hearts = '';

    viewModel.createHeart = () => {
        // Add a new heart emoji
        viewModel.set('hearts', viewModel.get('hearts') + '❤️');
        
        // Remove the heart after animation (2 seconds)
        setTimeout(() => {
            const currentHearts = viewModel.get('hearts');
            viewModel.set('hearts', currentHearts.slice(2)); // Remove one heart emoji
        }, 2000);
    };

    return viewModel;
}