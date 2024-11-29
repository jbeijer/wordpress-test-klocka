<?php
/*
Plugin Name: World Time Display
Description: Display time for 10 major cities using Vue 3
Version: 1.0
Author: Your Name
*/

function world_time_enqueue_scripts() {
    // Enqueue Vue from CDN
    wp_enqueue_script('vue', 'https://unpkg.com/vue@3/dist/vue.global.js', [], '3.3.4', true);
    
    // Enqueue our plugin files
    wp_enqueue_script('world-time-js', plugins_url('dist/world-time.js', __FILE__), ['vue'], '1.0', true);
    wp_enqueue_style('world-time-css', plugins_url('dist/world-time.css', __FILE__));
}

function world_time_shortcode() {
    world_time_enqueue_scripts();
    return '<div id="world-time-app"></div>';
}

add_shortcode('world_time', 'world_time_shortcode');
