#include <iostream>
using namespace std;
int main(){
    int n;
    cin >>n;
    int a[100]={0};
    a[0]=1;
    for(int i=1;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        for(int s=i-1;s>0;s--){
            a[s]=a[s]+a[s-1];
        }
        for(int j=0;j<i;j++){
            cout<<a[j]<<" ";
        }
        cout<<endl;
    }
}