<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <!-- <transition name="modal"> -->
      <div class="person">
        <div class="person_image">
          <img class="img-responsive" :src="person.image" alt="">
        </div>
      </div>
      <div class="person__description">
        <div class="person__info">
          <small>{{person.firstName}} {{person.lastName}}</small>
          <h4>{{person.email}}</h4>
        </div>
        <div class="person__number">
          <h4>{{person.phone}}</h4>
        </div>
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props: ['person'],
  components: {
    // 'product-button': ProductButton
  }
}
</script>
<!-- https://scotch.io/courses/build-an-online-shop-with-vue/introduction -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person {
  background: #FFF;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}
.person .person__description,
.person .person__action {
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
}
.person:hover .person__description {
  transform: translateY(-40px);
}
.person:hover .person__action {
  transform: none;
}
.person-link {
  display: block;
  color: #3D3D3D;
}
.person-link:hover {
  color: #3D3D3D;
  text-decoration: none;
}
.person .person__image {
  width: 100%;
}
.person__image img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 225px;
}
.person__description {
  width: 100%;
  display: flex;
  padding: 20px 20px 15px;
  background: #FFF;
}
.person__info {
  flex: 2;
}
.person__description small {
  color: #808080;
}
.person__description h4 {
  margin: 3px 0 5px 0;
}
.person__number {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #51D2B7;
}
.person__number p {
  flex-grow: 2;
  font-size: 20px;
  font-weight: bold;
}
.person__action {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);
}
.person__action button {
  border-radius: 0;
  width: 100%;
  display: block;
}
</style>
