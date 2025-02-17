<template>
  <main>
    <header>
      <h1 id="title">Quiz vue</h1>
      <input type="text" id="search-input">
    </header>
  </main>
</template>


<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

#title {
  font-weight: bold;
  margin-right: 30px;
}

#search-input {
  border: none;
  background-color: #c9c9c9a9;
  padding: 10px;
  border-radius: 5px;
}


</style>