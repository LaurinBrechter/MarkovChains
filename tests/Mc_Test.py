from MarkovChain import MarkovChain
import unittest
import numpy as np

class MCTest(unittest.TestCase):

    def __init__(self, methodName: str = ...) -> None:
        super().__init__(methodName)

        self.c = MarkovChain(np.array([[1/3, 0, 2/3], [0,1,0], [0,0.2,0.8]]))
        self.b = MarkovChain(np.array([[0.5,0.5], [1,0]]))

    def test_validator(self):
        self.assertFalse(self.b.is_reducible())
        self.assertTrue(self.c.is_reducible())


if __name__ == '__main__':
    unittest.main()