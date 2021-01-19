1.[1,2,3].map(x => x * x);//1

2.
 var cala = function(origin) {
     return function(add) {
     return function(mul)
         return (a + b)*mul;
     };
 };//非箭头函数

let cala = origin =>add => origin + add => (a+b)*mul//箭头函数

3.
第一种数组去重方法（使用Array.from）
let arr = [12,43,23,43,68,12];
let item = new Set(arr);
console.log(item);//结果输出的是一个对象

//使用Array.from转成数组

let arr = [12,43,23,43,68,12];
let item = Array.from(new Set(arr));
console.log(item);// [12, 43, 23, 68]

第二种数组去重方法（使用...扩展运算符）：
let arr = [12,43,23,43,68,12];
let item = [...new Set(arr)];
console.log(item);//[12, 43, 23, 68]

4.
第一种方法先遍历Map集合中所有的键，再根据键获取相应的值。
import java.util.*;
public class Ex11 {
	public static void main(String[] args){
		Map map = new HashMap();
		map.put("3", "Lucy");
		map.put("2", "Rose");
		map.put("1", "Jack");
		Set keySet = map.keySet();
		Iterator it = keySet.iterator();
		while(it.hasNext()){
			Object key = it.next();
			Object value = map.get(key);
			System.out.println(key+":"+value);
		}
	}
}

第二种方法先获取集合中所有的映射关系，然后从映射关系中取出键和值
import java.util.*;
public class Ex11 {
	public static void main(String[] args){
		Map map = new HashMap();
		map.put("3", "Lucy");
		map.put("2", "Rose");
		map.put("1", "Jack");
		Set entrySet = map.entrySet();
		Iterator it = entrySet.iterator();
		while(it.hasNext()){
			Map.Entry entry = (Map.Entry)(it.next());
			Object key = entry.getKey();
			Object value = entry.getValue();
			System.out.println(key+":"+value);
		}
	}
}
