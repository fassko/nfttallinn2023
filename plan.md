# Workshop Plan

1. Deploy a regular contract
2. Oops we forgot to add a function to retrieve the ticket what we should do?
3. Deploy a proxy contract and verify it by getting current implementation, see that function is missing.
4. Uncomment the `getMyTicket` function and upgrade, verify and see that it is not missing anymore
5. How can we do it more scalable way? We can use the OpenZeppelin Defender where we can approve or reject the contract upgrades.
6. Add the contract in OpenZeppelin Defender
7. Comment out the `getParticipantTicket` function
8. Porpose the upgrade with Defender
9. Approve in Defender
10. Get current implementation and see that it is not verified, verify it
11. Talk about Gnosis Safe
