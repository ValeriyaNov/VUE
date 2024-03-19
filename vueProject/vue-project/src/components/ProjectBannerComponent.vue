<template>
    <div>
        <div>
            <ProjectCatecoriesComponent @activCategories="activCategories" />
        </div>
        <div class="project">
            <div v-for="project in projectsPage" :key="project.id" class="project__div">
        <ProjectDescriptionComponent :project="project" />
            </div>
    
              

    </div>
     <PaginationComponent :totalPages="totalPages" :quantity="quantity" :visible="visible" :site="site"/> 
</div>
    
</template>

<script>
import ProjectDescriptionComponent from './ProjectDescriptionComponent.vue';
import ProjectCatecoriesComponent from './ProjectCatecoriesComponent.vue';
import PaginationComponent from './PaginationComponent.vue';
export default {
    components: {
        ProjectDescriptionComponent,
        ProjectCatecoriesComponent,
        PaginationComponent
  },
    name: 'ProjectBannerComponent',
    
  data() {
    return {
        currentPagesNull:1,
        projects:[],
        TwoCollection:
        [
            {id:11,
            img:require('@/assets/img/ProjectCom1.png'),
            title:'MinimalBedroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeksParent:{
            'border-radius': '0 0px 0 0',
            
        },
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:12,
            img:require('@/assets/img/ProjectCom3.png'),
            title:'Classic Minimal Bedroom',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:13,
            img:require('@/assets/img/ProjectCom5.png'),
            title:'Minimal Bedroom table',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:14,
            img:require('@/assets/img/ProjectCom7.png'),
            title:'Modern Medroom',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:15,
            img:require('@/assets/img/ProjectCom2.png'),
            title:'Modern Bedroom',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:16,
            img:require('@/assets/img/ProjectCom4.png'),
            title:'MinimalBedroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:17,
            img:require('@/assets/img/ProjectCom6.png'),
            title:'System Table',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:18,
            img:require('@/assets/img/ProjectCom8.png'),
            title:'Modern Bedroom',
            text:'Decor / Artchitecture',
            starCheck:false,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            }
        ],
        OneCollection:[ {id:21,
            img:require('@/assets/img/ProjectCom4.png'),
            title:'Bathroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:22,
            img:require('@/assets/img/ProjectCom6.png'),
            title:'System Table',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:22,
            img:require('@/assets/img/ProjectCom8.png'),
            title:'Modern Bedroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            }],
        ThreeCollection:
        [
            {id:31,
            img:require('@/assets/img/ProjectCom8.png'),
            title:'MinimalKithan',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeksParent:{
            'border-radius': '0 0px 0 0'
        },
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:32,
            img:require('@/assets/img/ProjectCom7.png'),
            title:'Classic Minimal Kithan',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:33,
            img:require('@/assets/img/ProjectCom1.png'),
            title:'Minimal Bedroom table',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:34,
            img:require('@/assets/img/ProjectCom5.png'),
            title:'Modern Medroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:36,
            img:require('@/assets/img/ProjectCom4.png'),
            title:'MinimalBedroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:37,
            img:require('@/assets/img/ProjectCom6.png'),
            title:'System Table',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            {id:38,
            img:require('@/assets/img/ProjectCom8.png'),
            title:'Modern Bedroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            }
        ],
        FourCollection:
        [
            {id:41,
            img:require('@/assets/img/ProjectCom5.png'),
            title:'Living Area',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeksParent:{
            'border-radius': '0 0px 0 0'
        },
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:42,
            img:require('@/assets/img/ProjectCom3.png'),
            title:'Classic Minimal Kithan',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:43,
            img:require('@/assets/img/ProjectCom1.png'),
            title:'Minimal Bedroom table',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '853px',
                    }
            },
            {id:44,
            img:require('@/assets/img/ProjectCom5.png'),
            title:'Modern Medroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            },
            
            {id:48,
            img:require('@/assets/img/ProjectCom8.png'),
            title:'Modern Bedroom',
            text:'Decor / Artchitecture',
            starCheck:true,
            geeks: {
            width: '585px',
            height: '522px',
                    }
            }
        ],
        quantity:6,
        visible:true,
        site:'project'
    };
  },
  created () {
    this.projects = this.TwoCollection
  },

  methods: {
    activCategories (data) {
        this.$router.push('/project');
      switch (data.id) {
        case 1:
          this.projects = this.OneCollection
          break
        case 2:
          this.projects = this.TwoCollection
          break
        case 3:
          this.projects = this.ThreeCollection
          break
        case 4:
          this.projects = this.FourCollection
          break
      }
    },
    currentPages(){
        this.current=this.$route.params.page ||1
    }
  },
  computed: {
    showBlok () {
      return this.visible
    },
    totalPages () {
      return Math.ceil(this.projects.length / this.quantity)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    projectsPage () {
      const pageNumber = this.currentPage;
      const startIndex = (pageNumber - 1) * this.quantity;
      const endIndex = startIndex + this.quantity;
      return this.projects.slice(startIndex, endIndex)
    
    }
  },
  }
  </script>
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
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
    
    column-count: 2;
    gap:35px;
    margin-top:61px; 
    margin-bottom: 61px;
    


    }
    .project__div{
        margin-bottom: 35px;
    }
  </style>