  s<script setup>
    import Foot from "../components/Foot.vue";
    import Layout from "../components/Layout.vue";
  </script>
  <template>
    <div className="vue-root">
    <Layout/>
    <Foot/>
  </div>
  </template>

  <style>
  .vue-root{
    position: absolute;
    width: 400px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 20px;
    top: 20px;
    border: 2px solid #dedede;
    border-radius: 20px;
    background: #a87676;
    z-index: 10;
  }
  </style>