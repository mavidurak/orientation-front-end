<template>
  <div class="messages">
    <div id="chat-container" >
        <div  id="search-container">
            <div class="input-icons">
              <i class="fas fa-search icon"></i>
              <input type="text" placeholder="Search" v-model="search"/>
            </div>
        </div>
        <div  id="conversation-list" v-show="!friendsList">
            <div class="conversation" v-for="conversation in filterConversations"
            id="deneme"
            :key="conversation.id" >
                <img :src="conversation.image" :alt="conversation.name"/>
                <div class="title-text">
                    {{conversation.name}}
                </div>
                <div class="created-date">
                    {{conversation.created}}
                </div>
                <div class="conversation-message">
                    {{conversation.text}}
                </div>
            </div>
        </div>
        <div id="friends-list" v-show="friendsList">
            <div class="friends " v-for="friend in filterFriends"
            :key="friend.id" @click="message()">
                <img :src="friend.image" :alt="friend.name" />
                <div class="title-text">
                    {{friend.name}}
                </div>
            </div>
        </div>
        <div id="new-message-container" >
              <i class="fas fa-users" v-show="!friendsList"
              @click="showFriends()" title="New Message"></i>
              <i class="fas fa-comments" v-show="friendsList"
              @click="showMessages()" title="Chat"></i>
        </div>
        <div id="chat-title">
            <span>{{conversations[1].name}}</span>
        </div>
        <div id="chat-message-list">
            <div v-for="message in messages" :key="message.id">
            <div class="message-row other-message" >
                <div class="message-content" v-if="!message.from" >
                    <img :src="conversations[1].image" :alt="conversations[1].name" />
                    <div class="message-text" >{{message.text}}</div>
                    <div class="message-time" >
                        {{message.hour}}.{{message.minute}}</div>
                </div>
            </div>
            <div class="message-row you-message"  >
                <div class="message-content" v-if="message.from" >
                    <div class="message-text">{{message.text}}</div>
                    <div class="message-time">{{message.hour}}.{{message.minute}}</div>
                </div>
            </div>
            </div>
        </div>
        <div id="chat-form">
            <input placeholder="type a message" id="send" v-model= "send"
            @keyup.enter="sendMessage">
             <i class="fas fa-paper-plane" @click="sendMessage"></i>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Deneme',
  data() {
    return {
      send: '',
      search: '',
      friendsList: false,
      friends: [
        {
          id: 1,
          name: 'Patricia Lebsack ',
          image: 'https://img.freepik.com/free-photo/photo-charismatic-lovely-woman-with-curly-hair-has-fun-toothy-smile-face_273609-30436.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
        },
        {
          id: 2,
          name: 'Andrew Reichert',
          image: 'https://images.squarespace-cdn.com/content/v1/5a8a9449f43b552a84c6cca4/1530763131943-9I0QL1BNKZVLPE963USQ/deaf+man.jpg?format=1000w',
        },
        {
          id: 3,
          name: 'Leanne Kurtis Graham',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU',
        },
        {
          id: 4,
          name: 'Chelsey ',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTI4NzN8MHwxfGNvbGxlY3Rpb258MjE0fDQ3NDIwNXx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
        },
      ],
      conversations: [
        {
          id: 1,
          name: 'Patricia Lebsack ',
          image: 'https://img.freepik.com/free-photo/photo-charismatic-lovely-woman-with-curly-hair-has-fun-toothy-smile-face_273609-30436.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600',
          created: '23.56',
          text: 'hello!!',
        },
        {
          id: 2,
          name: 'Andrew Reichert',
          image: 'https://images.squarespace-cdn.com/content/v1/5a8a9449f43b552a84c6cca4/1530763131943-9I0QL1BNKZVLPE963USQ/deaf+man.jpg?format=1000w',
          created: '23.42',
          text: 'ok',
        },
        {
          id: 3,
          name: 'Chelsey ',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTI4NzN8MHwxfGNvbGxlY3Rpb258MjE0fDQ3NDIwNXx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
          created: '18 Aug',
          text: 'Where are you? I am waiting you',
        },
        {
          id: 4,
          name: 'Leanne Kurtis Graham',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjhBaCE6_IlqbjxTdth5Hm0mccqejntA2XA&usqp=CAU',
          created: '17 Aug',
          text: 'ok bye',
        },
        {
          id: 5,
          name: 'Nicholas Runolfsdottir V ',
          image: 'https://img3.goodfon.com/wallpaper/nbig/c/ad/nikolas-holt-nicholas-hoult-5153.jpg',
          created: '17 Aug',
          text: 'thank you',
        },
        {
          id: 6,
          name: 'Glenna Reichert',
          image: 'https://images.squarespace-cdn.com/content/v1/5421eeb5e4b0517ce1c883f2/1572017189259-6D5O6ZHAP4KVB9PYAKNJ/glenna.jpg?format=1000w',
          created: '15 Aug',
          text: 'see you again',
        },
        {
          id: 7,
          name: 'Clementine Bauch',
          image: 'https://thegritandgraceproject.org/wp-content/uploads/2019/04/How-to-Become-the-Woman-You-Want-to-Be-1300x866.jpg',
          created: '15 Aug',
          text: '.',
        },
      ],
      messages: [
        {
          id: 1,
          text: 'ok',
          date: 'Thu Aug 19 2021 14:42:15 GMT+0300 (GMT+03:00)',
          hour: 23,
          minute: 42,
          from: false,
        },
        {
          id: 2,
          text: 'Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.',
          date: 'Thu Aug 19 2021 22:45:01 GMT+0300 (GMT+03:00)',
          hour: 22,
          minute: 45,
          from: false,
        },
        {
          id: 3,
          text: 'Yolumuz uzun, heyecanımız yüksek, gençliğimiz var.',
          date: 'Thu Aug 19 2021 22:11:36 GMT+0300 (GMT+03:00)',
          hour: 22,
          minute: 11,
          from: true,
        },
        {
          id: 4,
          text: 'Şuna inanmak gerekir ki, dünya yüzünde gördüğümüz her şey kadının eseridir.',
          date: 'Thu Aug 19 2021 21:40:11 GMT+0300 (GMT+03:00)',
          hour: 21,
          minute: 40,
          from: false,
        },
        {
          id: 5,
          text: 'Hak yemedim yemem, hakkımı da yedirtmem!',
          date: 'Thu Aug 19 2021 14:38:24 GMT+0300 (GMT+03:00)',
          hour: 14,
          minute: 38,
          from: true,
        },
      ],
    };
  },
  methods: {
    showFriends() {
      if (!this.friendsList) {
        this.friendsList = true;
      }
    },
    showMessages() {
      if (this.friendsList) {
        this.friendsList = false;
      }
    },
    sendMessage() {
      if (this.send !== '') {
        const date = new Date();
        this.messages.unshift({
          id: this.messages.length + 1,
          text: this.send,
          date,
          hour: date.getHours(),
          minute: date.getMinutes(),
          from: true,
        });
        this.send = '';
      }
    },
  },
  computed: {
    filterConversations: {
      get() {
        return this.conversations.filter((conversation) => conversation.name
          .toLowerCase()
          .includes(this.search.toLowerCase()));
      },
      set() {},
    },
    filterFriends: {
      get() {
        return this.friends.filter((friend) => friend.name
          .toLowerCase()
          .includes(this.search.toLowerCase()));
      },
      set() {},
    },
  },
  mounted() {
    this.filterConversations = this.conversations;
    this.filterFriends = this.friends;
  },
};
</script>

<style lang="scss" scoped>
.messages {
    display: grid;
    place-items: center;
}
#chat-container {
    display: grid;
    grid:
    'search-container chat-title' 70px
    'conversation-list chat-message-list' 1fr
    'new-message-container chat-form' 70px
    / 280px 1fr;
    min-width:600px;
    max-width:1200px;
    max-height: 800px;
    width:100%;
    height:95vh;
    background: #FFF;
    text-align:left;
}
#search-container, #conversation-list, #friends-list, #new-message-container {
    background: #1487b4;
}
#search-container {
    display:grid;
    align-items: center;
    padding: 0 20px;
    grid-area: search-container;
    border-radius: 3px 0 0 0;
    box-shadow:0 1px 3px -1px rgba(0,0,0,0.75);
    z-index:1;
}
#search-container input {
    color: rgb(58, 54, 54);
    background-color: #2c9dca ;
    outline: none;
    font-weight: bold;
    border-radius: 15px;
    height:30px;
    border:0;
    padding-left:40px;
}
#search-container input::placeholder{
    color: #086488;
    font-size:14px;
}
.input-icons i {
    position: absolute;
}
.icon {
    padding: 10px;
}
#conversation-list, #friends-list {
    grid-area: conversation-list;
    overflow-y: scroll;
}
.conversation {
    display: grid;
    grid-template-columns: 40px 1fr max-content;
    grid-gap: 10px;
    color: #ddd;
    font-size: 16px;
    padding: 20px 20px 20px 15px;
}
.conversation:hover {
    background: #056b94;
}
.conversation:hover {
    cursor: pointer;
}
.conversation > img {
    margin-top:5px;
    margin-left:-5px;
    grid-row: span 2;
    height: 50px;
    width: 50px;
    border-radius: 100%;
}
.friends {
    display: grid;
    grid-template-columns: 40px 1fr max-content;
    grid-gap: 5px;
    color: #ddd;
    font-size: 16px;
    border-bottom:1px solid #7c93c4;
    padding: 20px 20px 10px 20px;
}
.friends .title-text {
    padding-top:8px;
    padding-left: 10px;
}
.friends:hover {
    background: #056b94;
    cursor: pointer;
}
.friends > img {
    margin-left:-5px;
    grid-row: span 2;
    height: 40px;
    width: 40px;
    border-radius: 100%;
}
.title-text {
    font-size: 18px;
    font-weight: bold;
    color: #eee;
    padding-left:8px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
}
.created-date {
    color: #ddd;
    font-size: 0.8rem;
}
.conversation-message {
    grid-column: span 2;
    padding-left: 8px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
}
#new-message-container {
    display: grid;
    grid: 40px / 40px;
    grid-area: new-message-container;
    border-top: 1px solid rgba(0,0,0,0.25);
    border-radius: 0 0 0 3px;
    padding: 15px 15px;
}
#new-message-container i {
    cursor: pointer;
    align-items: center;
    display: grid;
    border-radius: 100%;
    color: #002C88;
    font-size:2.5rem;
    margin-left:-3px;
}
#chat-title, #chat-form {
    background: #eee;
}
#chat-title {
    display: grid;
    grid: 36px / 1fr 36px;
    align-content: center;
    grid-area: chat-title;
    color: #056b94;
    font-weight: bold;
    font-size: 20px;
    border-radius: 0 3px 0 0;
    box-shadow: 0 1px 2px -1px rgba(0,0,0,0.75);
}
span{
    margin-left:20px;
    margin-top:3px;
}
#chat-message-list {
    grid-area: chat-message-list;
    display:flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x:hidden;
    padding: 10px 20px;
}
.message-row {
    display: grid;
    grid-template-columns: 70%;
    margin-bottom: 10px;
}
.message-content {
    display: grid;
}
.you-message {
    justify-content: end;
}
.you-message .message-content {
    justify-items: end;
}
.other-message {
    justify-items: start;
}
.other-message .message-content {
    grid-template-columns: 48px 1fr;
    grid-column-gap: 10px;
}
.message-row img {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    grid-row: span 2;
}
.message-text {
    padding: 8px 12px;
    font-size: 16px;
}
.message-time {
    font-size: 12px;
    color: #777;
}
.you-message .message-text {
    background: #056b94;
    color: #eee;
    border: 1px solid #056b94;
    border-radius: 14px 14px 0 14px;
}
.other-message .message-text {
    background: rgb(248, 246, 246);
    color: #111;
    border: 1px solid #ddd;
    border-radius: 14px 14px 14px 0;
}
#chat-form {
    display: grid;
    grid-template-columns: 15fr 1fr;
    align-content: center;
    align-items: center;
    grid-gap: 10px;
    grid-area: chat-form;
    border-radius: 0 0 3px 0;
    padding-left:42px;
    padding-right:22px;
}
#chat-form i {
    cursor: pointer;
    display: grid;
    border-radius: 100%;
    color: #002C88;
    text-decoration: none;
    font-size:2rem;
}
#chat-form input {
    height: 50px;
    outline: none;
    padding: 15px ;
    border: 1px solid #ddd;
    color: #330;
    border-radius: 3px;
    font-size: 16px;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#conversation-list::-webkit-scrollbar {
    display:none;
}
#friends-list::-webkit-scrollbar {
    display:none;
}
@media only screen and (max-width: 700px) {
  #conversation-list, #new-message-container, #search-container {
    width:70px;
  }
  #search-container input {
    width: 45px;
    padding-left: 25px;
    margin-left: -5px;
  }
  .icon {
    margin-left: -10px;
  }
  #chat-container {
    display: grid;
    grid:
    'search-container chat-title' 70px
    'conversation-list chat-message-list' 1fr
    'new-message-container chat-form' 70px
    / 70px 1fr;
    min-width:200px;
    max-width:600px;
    max-height: 800px;
    width:100%;
  }
}
</style>
