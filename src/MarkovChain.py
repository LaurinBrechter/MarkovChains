from numpy import random as rd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

class MarkovChain():

    def __init__(self, transition_matrix: np.ndarray, p_init: np.ndarray = None, labels: np.ndarray =None):
        
        shape = transition_matrix.shape

        if shape[0] == shape[1]:
            if np.all(transition_matrix.sum(axis=1) == 1): # and np.all(transition_matrix.sum(axis=0) == 1):
                self.tm = transition_matrix
                
                
                # self.g = nx.from_numpy_array(self.tm)
                self.g = nx.from_numpy_array(self.tm, create_using=nx.DiGraph)
                
                
                self.n_states = shape[0]
            else:
                raise ValueError("Probabilities must sum up to one")
        else:
            raise ValueError("Transition Matrix must be square")

        if isinstance(p_init, np.ndarray):
            self.p_init = p_init
        else:
            self.p_init = np.ones((shape[0])) * (1/shape[0])

    def simulate(self, n:int):
        p_state_t = [self.p_init]

        for _ in range(n):
            p_state_t.append(p_state_t[-1] @ self.tm)

        return p_state_t

    def sample(self, n):
        states = np.arange(self.n_states)
        
        trajectory = [np.random.choice(states, p=self.p_init)]
        
        for _ in range(n):
            trajectory.append(np.random.choice(states, p=self.tm[trajectory[-1],:]))
        return np.array(trajectory)
        

    def plot_mc(self):
        return nx.draw(self.g, with_labels=True)

    def is_reducible(self) -> bool:
        # return False if nx.number_connected_components(self.g) == 1 else True
        return np.any(np.diagonal(self.tm)==1)


    def is_periodic(self) -> bool:
        raise NotImplementedError

    def summary(self):
        raise NotImplementedError

    def plot_steady_state(self,n_max):
        data = self.simulate(n_max)
        fig, ax = plt.subplots(1,1)
        ax.plot(data)
        ax.set_xlabel("state")
        ax.set_ylabel("Probability")
        return fig

    def has_limit():
        raise NotImplementedError

    def has_stationary():
        raise NotImplementedError

    def is_reachable(self, source, target):
        return nx.has_path(self.g, source, target)

    def draw_with_nx(self):
        return nx.draw(self.g, with_labels=True)

    def communicate(self, nodes: tuple):
        if self.is_reachable(nodes[0], nodes[1]) and self.is_reachable(nodes[1], nodes[0]):
            return True
        else:
            return False

    def is_irreducible(self):
        raise NotImplementedError

    def n_step_recurrence_prob(self):
        raise NotImplementedError

    def recurrence_prob(self):
        raise NotImplementedError

    def is_recurrent(self, state):
        raise NotImplementedError

    def avg_recurrence_time(self, state):
        raise NotImplementedError

    def is_positive_recurrent(self, state):
        raise NotImplementedError

    def is_zero_recurrent(self, state):
        raise NotImplementedError

    def state_periodicity(self, state):
        """
        Calculate period and wether the state is periodic, aperiodic or ergodic
        """