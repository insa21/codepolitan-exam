<script setup>

import { ref } from 'vue'
const showForm = ref(false);
const newMemo = ref("");
const memos = ref([]);
const errorMessage = ref('');


function addMemo() {
  if (!newMemo.value) {
    errorMessage.value = "Memo cannot be empty";
    return;
  }

  memos.value.push({
    id: Date.now(),
    memo: newMemo.value,
    date: new Date().toLocaleDateString("id-ID"),
    backgroundColor: getRandomColor(),
  })
  newMemo.value = "";
  showForm.value = false;
}

function deleteMemo(id) {
  memos.value = memos.value.filter((memo) => memo.id !== id);
}



function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1 class="header-title">Memo</h1>
        <button @click="showForm = true" class="header-button">+</button>
      </header>
      <div class="card-container">
        <div v-for="memo in memos" :key="memo.id" class="card" :style="{ backgroundColor: memo.backgroundColor }">
          <p class="card-content">{{ memo.memo }}</p>
          <div class="card-footer">
            <p class="card-date">{{ memo.date }}</p>
            <button @click="deleteMemo(memo.id)" class="card-delete-button">X</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="showForm = false" class="form-close-btn">&times;</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <textarea v-model="newMemo" name="memo" id="memo" cols="30" rows="10"></textarea>
        <button @click="addMemo" class="form-save-button ">Save</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}

.container {
  max-width: 900px;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 25px;
  color: #495a7d;
}

.header-button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  background-color: #495a7d;
  color: #fff;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.card {
  width: 225px;
  height: 225px;
  padding: 10px;
  background-color: #ffa6c1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.form-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-modal {
  width: 420px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-save-button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: #495a7d;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  color: #fff;
}


.form-close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-delete-button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 100%;
  background-color: rgba(2, 7, 17, 0.856);
  color: #fff;
}
</style>