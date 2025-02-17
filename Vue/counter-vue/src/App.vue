<script>
// import { ref } from 'vue';
// const count = ref(0);

export default {
    data() {
        return {
            count: 0,
        };
    },

    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        },
    },
};
</script>

<template>
    <div class="counter-container">
        <h1>Counter</h1>
        <span id="value">{{ count }}</span>
        <div class="buttons">
            <button @click="decrement" id="decrement">-</button>
            <button @click="reset" id="reset">Reset</button>
            <button @click="increment" id="increment">+</button>
        </div>
    </div>
</template>

<style scoped>
/* Counter value */
#value {
    display: block;
    font-size: 5rem;
    font-weight: bold;
    margin: 20px 0;
    color: #00ffcc;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

/* Buttons container */
.buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
}

/* Button styling */
button {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Different button colors */
#decrement {
    background: #ff4b4b;
    color: #fff;
}

#reset {
    background: #555;
    color: #fff;
}

#increment {
    background: #4caf50;
    color: #fff;
}

/* Hover effects */
button:hover {
    filter: brightness(1.2);
}

/* Active button effect */
button:active {
    transform: scale(0.9);
}

/* Animation when value changes */
.value-increase {
    color: #4caf50 !important;
    transform: scale(1.1);
}

.value-decrease {
    color: #ff4b4b !important;
    transform: scale(1.1);
}
</style>