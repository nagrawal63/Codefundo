pragma solidity ^0.5.0;

contract Election{
	struct Candidate {
		uint id;
		string name;
		uint voteCount;
	}
	//store accounts that have voted
	mapping(address => bool) public voters;
	mapping(uint => Candidate) public candidates;

	uint public candidatesCount;

	event votedEvent(
		uint indexed _candidateId
	);

	constructor () public{
		addCandidate("Candidate 1");
		addCandidate("Candidate 2");
	}

	function addCandidate (string memory _name) private{
		candidatesCount++;
		candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
	}

	function vote(uint _candidateId) public{
		require(!voters[msg.sender]); // If this condition is true then only the rest of the function code will be executed
		require(_candidateId>0 && _candidateId <= candidatesCount);
		voters[msg.sender]=true;
		candidates[_candidateId].voteCount++;
		emit votedEvent(_candidateId);
	}
}
