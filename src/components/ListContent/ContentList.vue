<template>
  <div class="list-group">
      <ContentDetailSmall :content="item" v-for="item in content" :key="item.id"/>
  </div>
</template>
<script>
import ContentDetailSmall from '@/components/ListContent/ContentDetailSmall.vue';

export default {
  components: {
    ContentDetailSmall,
  },
  data() {
    return {
      content: [
        {
          id: 1,
          name: 'Hayvan Çiftliği',
          image: 'https://i.dr.com.tr/cache/600x600-0/originals/0000000105409-1.jpg',
          rate: 9,
          user: {
            name: 'George Orwell',
          },
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 2,
          name: '1984',
          image: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000064038-1.jpg',
          rate: 7,
          user: {
            name: 'George Orwell',
          },
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 3,
          name: 'İki Şehrin Hikayesi',
          image: 'https://i.dr.com.tr/cache/500x400-0/originals/0001821704001-1.jpg',
          rate: 5,
          user: {
            name: 'Charles Dickens',
          },
          createdAt: 1,
          updatedAt: 1,
        },
      ],
    };
  },
};
</script>
