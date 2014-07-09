if (typeof Promise === "undefined") {
(function () {
	function Promise(resolver) {
		var
		self = this,
		then = self.then = function () {
			return Promise.prototype.then.apply(self, arguments);
		};

		then.fulfilled = [];
		then.rejected = [];

		function timeout(state, object) {
			then.state = 'pending';

			if (then[state].length) setTimeout(function () {
				timeout(state, then.value = then[state].shift().call(self, object));
			}, 0);
			else then.state = state;
		}

		then.fulfill = function (object) {
			timeout('fulfilled', object);
		};

		then.reject = function (object) {
			timeout('rejected', object);
		};

		resolver.call(self, then.fulfill, then.reject);

		return self;
	}

	Promise.prototype = {
		'constructor': Promise,
		'then': function (onFulfilled, onRejected) {
			if (onFulfilled) this.then.fulfilled.push(onFulfilled);
			if (onRejected) this.then.rejected.push(onRejected);

			if (this.then.state === 'fulfilled') this.then.fulfill(this.then.value);

			return this;
		},
		'catch': function (onRejected) {
			if (onRejected) this.then.rejected.push(onRejected);

			return this;
		}
	};

	Promise.all = function () {
		var
		args = Array.prototype.slice.call(arguments),
		countdown = args.length;

		function process(promise, fulfill, reject) {
			promise.then(function onfulfilled(value) {
				if (promise.then.fulfilled.length > 1) promise.then(onfulfilled);
				else if (!--countdown) fulfill(value);

				return value;
			}, function (value) {
				reject(value);
			});
		}

		return new Promise(function (fulfill, reject) {
			while (args.length) process(args.shift(), fulfill, reject);
		});
	};

	window.Promise = Promise;
})();

}
if (!Array.prototype.forEach) {
// Array.prototype.forEach
Array.prototype.forEach = function forEach(callback, scope) {
	for (var array = this, index = 0, length = array.length; index < length; ++index) {
		callback.call(scope || window, array[index], index, array);
	}
};

}
if (!Array.prototype.indexOf) {
// Array.prototype.indexOf
Array.prototype.indexOf = function indexOf(searchElement) {
	for (var array = this, index = 0, length = array.length; index < length; ++index) {
		if (array[index] === searchElement) {
			return index;
		}
	}

	return -1;
};

}
if (!Array.prototype.filter) {
// Array.prototype.filter
Array.prototype.filter = function filter(callback, scope) {
	for (var array = this, arrayB = [], index = 0, length = array.length, element; index < length; ++index) {
		element = array[index];

		if (callback.call(scope || window, element, index, array)) {
			arrayB.push(element);
		}
	}

	return arrayB;
};

}
if (!Function.prototype.bind) {
// Function.prototype.bind
Function.prototype.bind = function bind(scope) {
	var callback = this, prepend = Array.prototype.slice.call(arguments, 1), Constructor = function () {}, bound = function () {
		return callback.apply(this instanceof Constructor && scope ? this : scope, Array.prototype.concat.apply(prepend, arguments));
	};

	Constructor.prototype = bound.prototype = callback.prototype;

	return bound;
};

}
if (!Array.prototype.map) {
// Array.prototype.map
Array.prototype.map = function map(callback, scope) {
	for (var array = this, arrayB = [], index = 0, length = array.length, element; index < length; ++index) {
		element = array[index];

		arrayB.push(callback.call(scope || window, array[index], index, array));
	}

	return arrayB;
};

}
if (typeof Array === "undefined" || Array && !Array.isArray) {
// Array.isArray
Array.isArray = function isArray(array) {
	return array && Object.prototype.toString.call(array) === '[object Array]';
};

}
if (typeof Object === "undefined" || Object && !Object.create) {
// Object.create
Object.create = function create(prototype, properties) {
	if (typeof prototype !== 'object') {
		throw new Error('Object prototype may only be an Object or null');
	}

	var Constructor = function () {};

	Constructor.prototype = prototype;

	var object = new Constructor();

	Object.defineProperties(object, properties);

	return object;
};

}
if (typeof Object === "undefined" || Object && !Object.keys) {
// Object.keys
Object.keys = function keys(object) {
	var buffer = [], key;

	for (key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			buffer.push(key);
		}
	}

	return buffer;
};

}
if (typeof Object === "undefined" || Object && !Object.defineProperties) {
// Object.defineProperties
Object.defineProperties = function defineProperties(object, descriptors) {
	for (var property in descriptors) {
		Object.defineProperty(object, property, descriptors[property]);
	}

	return object;
};

}
