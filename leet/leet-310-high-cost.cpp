class Solution {
public:
	vector<int> findMinHeightTrees(int n, vector<pair<int, int>> &edges) {
		vector<vector<int>> minDis(n, vector<int>(n, n));
		for (int i = 0; i < edges.size(); i++) {
			minDis[edges[i].first][edges[i].second] = 1;
			minDis[edges[i].second][edges[i].first] = 1;
		}
		for (int i = 0; i < n; i++) {
			minDis[i][i] = 0;
			for (int j = 0; j < n; j++) {
				if (j == i || minDis[i][j] == n) { continue; }
				for (int k = 0; k < n; k++) {
					if (k == i || k == j) { continue; }
					minDis[i][k] = minDis[k][i] = fmin(fmin(minDis[k][j], minDis[j][k]) + minDis[i][j], minDis[k][i]);
				}
			}
		}
		int minHeight = n;
		vector<int> result;
		vector<int> nodeMinDis(n, n);
		for (int i = 0; i < n; i++) {
			int maxHeight = 0;
			for (int j = 0; j < n; j++) {
				maxHeight = fmax(minDis[i][j], maxHeight);
			}
			nodeMinDis[i] = maxHeight;
			minHeight = fmin(maxHeight, minHeight);
		}
		for (int i = 0; i < n; i++) {
			if (nodeMinDis[i] == minHeight) {
				result.push_back(i);
			}
		}
		return result;
	}
};