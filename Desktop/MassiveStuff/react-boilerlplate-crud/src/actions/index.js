import {
    HANDLE_DRAWER_TOGGLE_CHANGE
} from '../constants/Index';


export function handleDrawerToggleChange(toggleStatus) {
    return {type: HANDLE_DRAWER_TOGGLE_CHANGE, toggleStatus}
}

