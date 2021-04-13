<template>
  <div class="input">
    <h1 id="grup">Gruplar</h1>
    <input
      type="text"
      v-model="grup"
      id="grup-ismi"
      placeholder="Grup ismi"
    />
    <button id="grup-ara">Grup ara</button>
    <CommunityList :community="{communityes, grup}" />
  </div>
</template>
<script>
import CommunityList from '../components/CommunityList/CommunityList.vue';

export default {
  components: {
    CommunityList,
  },

  data() {
    return {
      grup: '',
      community: {
        id: Number,
        name: String,
        image: String,
        members: Number,
        createdAt: Date,
        updatedAt: Date,
        detail: String,
      },
      communityes: [
        {
          id: 1,
          name: 'Our Shared Shelf',
          image: 'https://images.gr-assets.com/groups/1479936067p3/179584.jpg',
          members: 232058,
          detail:
            'OUR SHARED SHELF IS CURRENTLY DORMANT AND NOT MANAGED BY EMMA AND HER TEAM.Dear Readers,As part of my work with UN Women, I have started reading as many books and essays about equality as I can get my hands on. There is so much amazing stuff out there! Funny, inspiring, sad, thought-provoking, empowering! I’ve been discovering so much that, at times, I’ve felt like my head was about to explode… I decided to start a Feminist book club, as I want to share what I’m learning and hear your thoughts too',
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 2,
          name: "Oprah's Book Club ",
          image: 'https://images.gr-assets.com/groups/1470141005p3/85538.jpg',
          members: 56082,
          detail:
            "Welcome to the official Oprah's Book Club group. OBC is the interactive, multi-platform reading club bringing passionate readers together to discuss inspiring stories.",
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 3,
          name: 'Goodreads Authors/Readers',
          image: 'https://images.gr-assets.com/groups/1258849870p3/26989.jpg',
          members: 39009,
          detail:
            'This group is dedicated to connecting readers with Goodreads authors. It is divided by genres, and includes folders for writing resources, book websites, videos/trailers, and blogs.',
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 4,
          name: "What's the Name of That Book???",
          image: 'https://images.gr-assets.com/groups/1181648880p3/185.jpg',
          members: 71099,
          detail:
            "Can't remember the title of a book you read? Come search our bookshelves. If you don’t find it there, post a description on our UNSOLVED message board and we can try to help each other out.",
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 5,
          name: 'Addicted to YA',
          image: 'https://images.gr-assets.com/groups/1329254899p3/64233.jpg2',
          members: 43907,
          detail:
            "'One must always be careful of books,' said Tessa, 'and what is inside them, for words have the power to change us.'― Cassandra Clare, Clockwork Angel",
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 6,
          name: 'Ultimate Popsugar Reading Challenge',
          image: 'https://images.gr-assets.com/groups/1418789182p3/152458.jpg',
          members: 34490,
          detail:
            'This group is for people participating in the Popsugar reading challenge for 2021. The Popsugar website posted a reading challenge that included a list of 40 different ways to choose your next book to read plus an additional 10 for an "advanced challenge". In this group we will follow those lists (whether you do all 50 or stick to 40) to choose books to read for the year.',
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 7,
          name: 'Goodreads Librarians Group',
          image: 'https://images.gr-assets.com/groups/1269147049p3/220.jpg',
          members: 123900,
          detail:
            'A place where all Goodreads members can work together to improve the Goodreads book catalog. Non-librarians are welcome to join the group as well, to comment or request changes to book records.',
          createdAt: 1,
          updatedAt: 1,
        },
        {
          id: 8,
          name: 'Audiobooks',
          image: 'https://images.gr-assets.com/groups/1378328157p3/596.jpg',
          members: 10613,
          detail:
            'Audio & audiobooks are getting more and more popular for commuters & those wanting to squeeze in another book or two a month while doing other activities.',
          createdAt: 1,
          updatedAt: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#grup {
  margin-bottom: 20px;
  position: relative;
  right: 240px;
}
.input {
  margin: 10px;
  #grup-ismi {
    width: 500px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 10px;
    margin-right: 10px;
  }
  #grup-ara {
    width: 100px;
    height: 35px;
    border: 1px solid #1167b8;
    border-radius: 5px;
    background-color: #1167b8;
    color: white;
  }
  #grup-ara:hover {
    background-color: rgb(10, 10, 114);
  }
}
</style>
