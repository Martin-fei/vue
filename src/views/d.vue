<template>
  <div>
    this is d!
    <h1>state
      <span>{{count}}</span>
    </h1>
    <h1>getters
      <span>{{doubleCount}}</span>
    </h1>
    <button @click="a">增加</button>
    <button @click="aa">延迟增加</button>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
export default {
  computed:{
    ...mapState({
      // count:'count',//字符串时的时候count=state.count
      count:state=>state.count.count,//模块化时的用法
    }),
    // doubleCount(){
    //   return this.$store.getters.doubleCount
    // }
    ...mapGetters([
      'doubleCount'
    ])
  },
  methods:{
    ...mapMutations([
      'add','decrease'
    ]),
    a(){
      this.add()
    },
    ...mapActions([
      'delayAdd'
    ]),
    aa(){
      this.delayAdd()
    }
  }
}
</script>