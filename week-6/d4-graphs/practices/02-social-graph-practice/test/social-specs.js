const { expect } = require('chai');

const SocialNetwork = require("../social.js");

describe ('Tree practice', function () {

  let socialNetwork;

  beforeEach(function () {

    socialNetwork = new SocialNetwork();

  });

  describe('addUser', () => {

    it('can create a user', function () {

      expect(Object.keys(socialNetwork.users).length).to.equal(0);

      expect(socialNetwork.addUser("User 1")).to.equal(1);

      expect(Object.keys(socialNetwork.users).length).to.equal(1);

      expect(socialNetwork.users['1']).to.deep.equal({ id: 1, name: 'User 1' });

    });

    it('returns an incrementing userID', function () {

      expect(socialNetwork.addUser("User 1")).to.equal(1);
      expect(socialNetwork.addUser("User 2")).to.equal(2);
      expect(socialNetwork.addUser("User 3")).to.equal(3);
      expect(socialNetwork.addUser("User 4")).to.equal(4);
      expect(socialNetwork.addUser("User 5")).to.equal(5);

    });

    it("initializes an empty set for the user's followers", function () {

        expect(Object.keys(socialNetwork.follows).length).to.equal(0);

        expect(socialNetwork.addUser('User 1')).to.equal(1);

        expect(Object.keys(socialNetwork.follows).length).to.equal(1);

        expect(socialNetwork.follows['1']).to.be.an.instanceof(Set)

    })
  });

  describe('getUser', () => {

    it('can get a created user', function () {

      userID = socialNetwork.addUser("User 1");

      expect(socialNetwork.getUser(userID).name).to.equal("User 1");

    });

    it('returns null if the user does not exist', function () {

      expect(socialNetwork.getUser(100)).to.equal(null);

    });

  });

  describe('follow', () => {

    it('returns true if a follow is created', function () {

      userID1 = socialNetwork.addUser("User 1");
      userID2 = socialNetwork.addUser("User 2");

      expect(socialNetwork.follows[userID1].size).to.equal(0);

      expect(socialNetwork.follow(userID1, userID2)).to.be.true;

      expect(socialNetwork.follows[userID1].size).to.equal(1);
      expect(socialNetwork.follows[userID1]).to.have.keys([2]);

    });

    it('returns false if the follow fails', function () {

      userID1 = socialNetwork.addUser("User 1");

      expect(socialNetwork.follows[userID1].size).to.equal(0);

      expect(socialNetwork.follow(userID1, 100)).to.be.false;

      expect(socialNetwork.follows[userID1].size).to.equal(0);

    });

    it('does not automatically create mutual follows', function () {

      userID1 = socialNetwork.addUser("User 1");
      userID2 = socialNetwork.addUser("User 2");

      expect(socialNetwork.follow(userID1, userID2)).to.be.true;

      expect(socialNetwork.follows[userID2].size).to.equal(0);

    });

  });

  describe('getFollows', () => {

    it('returns a list of that user\'s follows', function () {

      userID1 = socialNetwork.addUser("User 1");
      userID2 = socialNetwork.addUser("User 2");
      socialNetwork.follow(userID1, userID2);

      expect(socialNetwork.follows[userID1].size).to.equal(1);
      expect(socialNetwork.follows[userID2].size).to.equal(0);

      expect(socialNetwork.getFollows(userID1)).to.have.keys([2]);

    });

  });

  describe('getFollowers', () => {

    it('returns a list of that user\'s followers', function () {

      userID1 = socialNetwork.addUser("User 1");
      userID2 = socialNetwork.addUser("User 2");
      socialNetwork.follow(userID1, userID2);

      expect(socialNetwork.getFollowers(userID1).size).to.equal(0);
      expect(socialNetwork.getFollowers(userID2).size).to.equal(1);
      expect(socialNetwork.getFollowers(userID2)).to.have.keys([1]);
    });

  });

  describe('getRecommendedFollows', () => {

    it('returns a list of recommended follows', function () {

      userID1 = socialNetwork.addUser("User 1");
      userID2 = socialNetwork.addUser("User 2");
      userID3 = socialNetwork.addUser("User 3");
      userID4 = socialNetwork.addUser("User 4");
      userID5 = socialNetwork.addUser("User 5");
      userID6 = socialNetwork.addUser("User 6");

      socialNetwork.follow(1, 2);
      socialNetwork.follow(2, 3);
      socialNetwork.follow(3, 4);
      socialNetwork.follow(3, 5);
      socialNetwork.follow(4, 1);
      socialNetwork.follow(4, 2);
      socialNetwork.follow(5, 6);

      expect(socialNetwork.getRecommendedFollows(1, 1)).to.have.members([3]);
      expect(socialNetwork.getRecommendedFollows(1, 2)).to.have.members([3, 4, 5]);
      expect(socialNetwork.getRecommendedFollows(1, 3)).to.have.members([3, 4, 5, 6]);

    });

  });



});
