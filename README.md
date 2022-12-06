# Breadth first search (BFS) Javascript

[Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)


![graph](https://www.simplilearn.com/ice9/free_resources_article_thumb/BFS-Algorithm-Soni/bredth-first-search-in-graph-data-structure.png)


>_BFS is a graph traversal approach in which you start at a source node and layer >by layer through the graph, analyzing the nodes directly related to the source >node. Then, in BFS traversal, you must move on to the next-level neighbor nodes._


## The friends example

Let's say you have a group of friends, as you can see on the example below, there are several friends (nodes) connected by a path.
What the BFS solves is to get the path from one user into another. For example:
**"Jhon is connected to liz through Robert"** or **"Jhon is connected to Susan through Ana/Robert"**

![friends](https://lh3.googleusercontent.com/BX4dDK5kbyhwT9G-91NxNwRLfmZmQBjOqJQR_D6OV40Q_-AAaab7FegnRtigFNzcWwqvbIEnTghWdC514Jyca-WxA8Sh38twScmgLrY-wLEKSzmmAAQvNUkca68g6biEGNxRDnixPLnx3QZFvBoL8XP0GxiGI23t-cEYXZvzSCDPHjkmP6y8B9khM2QG200lSbo1dActM2ECpufYhJZlfGceISS5Wfmj40-e1XJnXeBT3ILO5Sd0aujdN7R26h2AOFuR9JIKZwQILiFqGdO_suwA0Nz-F8R-NdJpNfLe3jn1xmSlLM3Gv17q3fobsKjAPDUmrxoF_6Z-rouzVZ2mlWI8nYwupZC_0yhiW7ACIYFTVwanNJJma_82M6GqjtI1ED75subN3aJ-tIcpgSPgJetC2V0jnqKTt5Aj9puDxMRWGR7KrtrY9vMHyUi34U18CZBi1BHFo7M8szX_U9Un_Wr6yJq8hXULyshlButUIeUs5-Sx2QApD-oOzDa_k0sf0vSlzkHZjvrY6cwU5rgwdDEpt7jSHK8bZWwEYfDQAxYcuN-JvsNeR63w1Sjm9jRVEBGRY0Zyk5GHeXxEpzv9hzLHqXxsR1MmtfqMTOYeB8hQc2a26RwmSE5LYDHCpHI1I4kGBcw_r6s-Qhtk3Xjvq36cg3_xY4nDZe4yt-IYkhrucpiJBCFIk28AZG0xQG5p18wrIVhnDSq4PqQSRb8n0LVKJg-eDPf7SzEgFnC0D-mbxa6Zzyvwfsx6jap3vadZKddkJ5HxIb8WSFlSLTH3I9Q3mhxiIBqvyjU1i-eFt8KWmk-exS3tmR0VLadwbj64FT_VsXX9cU0phdconP0v0PYTRlHgSxFUmgxANT1dIxJv-0g7nkiRKuokcUOSQntJ23p6MsqHSeaUPt8IRf2qvhbVSceb6SEdYvE9wFwu1OTSr8W9gA=w683-h384-no)


But let's take a better look on the code. [Find the path](./findPath.js)
