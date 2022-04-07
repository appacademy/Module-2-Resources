const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
const sinon = require('sinon');
chai.use(spies);

const User = require('../class/user');
const Post = require('../class/post');
const { describe } = require('mocha');


describe('Post', () => {
    let steve;
    let bill;
    let post1;
    
    beforeEach(() => {
        steve = new User('Steve', 42, 'Chicago', 'steverino@gmail.com', 'supergoodpassword');
        bill = new User('Bill', 25, 'St. Louis', 'billbobaggins@hotmail.com', 'realgreatpassword');
        post1 = new Post('Da Bears', 'Someday da Bears will win!!', '4/7/2022', steve);
    });

    it('should have a title property', () => {
        expect(post1.title).to.eql('Da Bears');
    });
    
    it('should have a body property', () => {
        expect(post1.body).to.eql('Someday da Bears will win!!');
    });
    
    it('should have a date property', () => {
        expect(post1.date).to.eql('4/7/2022');
    });

    it('should have a author property that is an instance of the User class', () => {
        expect(post1.author.name).to.eql('Steve');  
    });

    it('should have a likes property', () => {
        expect(post1.likes).to.eql([]);
    });

    describe('the likePost method', () => {
        it('should add the passed in user to the post\'s likes array', () => {
            post1.likePost(steve);
            expect(post1.likes).to.eql(['Steve']);
        });

        it ('should throw an Error if a user has already liked the post', () => {
            let errorMessage;
            
            try {
                post1.likePost(steve);
                post1.likePost(steve);
            } catch (e) {
                errorMessage = e.message;
                expect(errorMessage).to.eql("You already liked this post!");
            }
            // expect(() => post1.likePost(steve)).to.throw(Error);
        });
    });

    describe('the dislikePost method', () => {
        it('should remove the passed in user from the likes array', () => {
            post1.likePost(steve);
            post1.likePost(bill);

            expect(post1.likes).to.eql(['Steve', 'Bill']);

            post1.dislikePost(steve);

            expect(post1.likes).to.eql(['Bill']);

        });
    });

    describe('the printPost method', () => {
        beforeEach(() => {
            sinon.stub(console, "log");
        });
        
          afterEach(() => {
            console.log.restore();
        });

        it('should format and log the post to the console', () => {
            post1.printPost();

            expect(console.log.calledWith("-------------------")).to.be.true;
            expect(console.log.calledWith("Steve posted on 4/7/2022")).to.be.true;
            expect(console.log.calledWith("Title: Da Bears")).to.be.true;
            expect(console.log.calledWith("Post likes: 0")).to.be.true;
            expect(console.log.calledWith("Someday da Bears will win!!")).to.be.true;
            expect(console.log.calledWith("-------------------")).to.be.true;
        });
        
    });
});