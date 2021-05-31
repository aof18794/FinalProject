#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int result;
int R,C,r1,c1,r2,c2,r3,c3, n;
pair<int, int> up = make_pair(0, 1);
pair<int, int> down = make_pair(0, -1);
pair<int, int> goLeft = make_pair(-1, 0);
pair<int, int> goRight = make_pair(1, 0);
pair<int, int> start = make_pair(1, 1);
pair<int, int> stop = make_pair(1, 2);
vector<pair<int, int>> direction = {up, down, goLeft, goRight};
vector<pair<int, int>> order;
set<pair<int, int>> special;
set<int> specialWalk;

bool isWithinBox(pair<int, int> &position) {
 return (1 <= position.first && position.first <= R) && (1 <= position.second && position.second <= C);
}

void nextPosition(pair<int, int> currentPosition, pair<int,int> d, int walktime, set<pair<int,int>> visitedBox, vector<pair<int, int>> order) {
    currentPosition.first += d.first;
    currentPosition.second += d.second;
    if (walktime == n) {
        if (currentPosition == stop) {
            for (auto e : order) {
                    printf("(%d,%d)->", e.first, e.second);
            }
            cout << "(1,2)\n";
            result++;
        }
        return;
    }
    if (!isWithinBox(currentPosition)) return;
    if (visitedBox.find(currentPosition) != visitedBox.end()) return;
    if ((currentPosition == stop) && (walktime != n)) return;
    if (specialWalk.find(walktime) != specialWalk.end()) {
        if (special.find(currentPosition) == special.end()) return;
    }
    if (walktime != n) {
        visitedBox.insert(currentPosition);
        order.push_back(currentPosition);
        int next = walktime+1;
        for (auto d : direction) {
            nextPosition(currentPosition, d, next, visitedBox, order);
        }
    }
    return;
}

int walking(int &R, int &C, int &r1, int &c1, int &r2, int &c2, int &r3, int &c3) {
    result = 0;
    n = R*C;
    specialWalk = {(n/4), (2*n/4), (3*n/4)};
    special = {make_pair(r1, c1), make_pair(r2, c2), make_pair(r3, c3)};
    set<pair<int, int>> visitedBox;
    if (special.find(make_pair(2, 1)) != special.end()) return 0;
    visitedBox.insert(start);
    order.push_back(start);
    for (auto d : direction) {
        nextPosition(start, d, 2, visitedBox, order);
    }
    return result;
}

int main() {
    cin >> R >> C >> r1 >> c1 >> r2 >> c2 >> r3 >> c3;
    cout << walking(R, C, r1, c1, r2, c2, r3, c3);

}
// 3 6 1 5 3 2 3 5
// 3 4 3 1 2 3 2 4
// 4 6 4 3 3 4 2 5
// 4 8 3 4 4 2 6 4
// 4 8 1 4 4 5 2 7