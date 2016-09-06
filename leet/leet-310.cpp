#include "stdafx.h"
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
	vector<int> findMinHeightTrees(int n, vector<pair<int, int>> &edges) {
		vector<int> times(n, 0);
		vector<int> result;
		for (int i = 0; i < edges.size(); i++) {
			times[edges[i].first]++;
			times[edges[i].second]++;
		}
		int root;
		while (true) {
			if (edges.size() == 0) {
				result.push_back(root);
				break;
			}
			else if (edges.size() == 1) {
				if (edges[0].first > edges[0].second) {
					result.push_back(edges[0].second);
					result.push_back(edges[0].first);
				}
				else {
					result.push_back(edges[0].first);
					result.push_back(edges[0].second);
				}
				break;
			}
			else {
				root = findLeaf(edges, times);
			}
		}
		return result;
	}
	int findLeaf(vector<pair<int, int>> &edges, vector<int> &times) {
		vector<int> deleteTimes(times.size(), 0);
		vector<int> timesCopy(times);
		int root = 0;
		for (int i = 0; i != edges.size(); ) {
			if ((times[edges[i].first] == 1 && timesCopy[edges[i].first] == 1) || (times[edges[i].second] == 1 && timesCopy[edges[i].second] == 1)) {
				times[edges[i].first]--;
				deleteTimes[edges[i].first]++;
				if (deleteTimes[edges[i].first] > 1) {
					root = edges[i].first;
				}
				times[edges[i].second]--;
				deleteTimes[edges[i].second]++;
				if (deleteTimes[edges[i].second] > 1) {
					root = edges[i].second;
				}
				edges.erase(edges.begin() + i);
			}
			else {
				i++;
			}
		}
		return root;
	}
};
int main()
{
	Solution wbc;
	vector<pair<int, int>> data{ pair<int, int>(1,0),pair<int, int>(1,2),pair<int, int>(1,3) };
	vector<int> result = wbc.findMinHeightTrees(4, data);
	for (int i = 0; i < result.size(); i++) {
		cout << result[i];
	}
	cin.get();
	return 0;
}
