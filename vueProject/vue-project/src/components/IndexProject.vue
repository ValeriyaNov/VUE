<template>
    
        <div class="index__project">
            <div v-for="project in collection" :key="project.id" class="index__project__div">
            <ProjectDescriptionComponent :project="project" />
            </div>  
        </div> 
    
    
</template>

<script>
import ProjectDescriptionComponent from './ProjectDescriptionComponent.vue';

export default {
    components: {
        ProjectDescriptionComponent
  },
    name: 'IndexProject',
    //props: ['project'],
  data() {
    return {
        
        collection:
        [
            {id:1,
            img:require('@/assets/img/Index1.png'),
            title:'Modern Kitchen',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeksParent:{
            'border-radius': '0 80px 0 0'
            
        },
            geeks: {
            width: '616px',
            height: '548px',
                    }
            },
            {id:2,
            img:require('@/assets/img/Index2.png'),
            title:'Modern Kitchen',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeksParent:{
            'border-radius': '80px 0 0 0'},
            geeks: {
            width: '616px',
            height: '548px',
                    }
            },
            {id:3,
            img:require('@/assets/img/Index3.png'),
            title:'Modern Kitchen',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeksParent:{
            'border-radius': '0 0 80px 0'},
            geeks: {
            width: '619px',
            height: '548px',
                    }
            },
            {id:4,
            img:require('@/assets/img/Index4.png'),
            title:'Modern Kitchen',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeksParent:{
            'border-radius': '0 0 0 80px'},
            geeks: {
            width: '619px',
            height: '548px',
                    }
            },
    
        ],

    };
  },
  created () {
    this.projects = this.TwoCollection
  },

  methods: {
    
  }
  }
  </script>
  <style lang="scss" scoped>
  
$whidthScrin:1140px;
    * {
    margin: 0;
    padding: 0;
    block-size: border-box;
    text-decoration: none;
}
  .project{
    margin-left: calc(50% - $whidthScrin/2 - 30px);
    margin-right: calc(50% - $whidthScrin/2 - 30px);
    //width: 1200px;
    //margin-inline: auto;
    column-count: 2;
    gap:35px;
    margin-top:61px; 
    margin-bottom: 61px;
    //gap: 35px;
    //height: 3200px;


    }
    .project__div{
        margin-bottom: 35px;
    }
  </style>