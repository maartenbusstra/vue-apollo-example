<script>
import gql from 'graphql-tag';

const twitterQuery = gql`
  query TwitterFeed($handle: UserIdentity!) {
    twitter {
      user(
        identifier: name,
        identity: $handle
      ) {
        name
        tweets {
          id
          text
        }
      }
    }
  }
`;

export default {
  data: () => ({
    twitterHandle: '',
    twitter: {},
  }),
  methods: {
    handleUpdate(e) {
      this.twitterHandle = e.target.value;
    }
  },
  apollo: {
    twitter: {
      query: twitterQuery,
      variables() {
        return { handle: this.twitterHandle };
      }
    }
  },
};
</script>

<template>
  <div id="twitter-feed">
    <hr>
    <h1>Twitter Feed</h1>
    <input @keyup.enter="handleUpdate" type="text" />
    <h2 v-if="twitter.user">{{ twitter.user.name }}</h2>
    <ul v-if="twitter.user">
      <li
        class="card"
        v-for="tweet in twitter.user.tweets"
      >
        {{ tweet.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
  #twitter-feed {
    width: 400px;
    margin: 0 auto;
  }
  ul {
    list-style: none;
    box-sizing: border-box;
    padding: 0;
  }
  .card {
    box-sizing: border-box;
    width: 400px;
    max-height: 280px;
    color: #4477EE;
    border: 1px solid #e1e8ed;
    border-width: 1px;
    border-radius: 0 0 4px 4px;
    margin: 24px 0 24px;
    padding: 24px;
  }
</style>
