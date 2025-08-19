/* Copyright 2019 Google LLC All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ==============================================================================*/

import * as generators from "./generators";

export const extendedDemos = [
  {
    name: "Star",
    description: "Points arranged in a radial star pattern",
    options: [
      {
        name: "Number of points",
        min: 10,
        max: 300,
        start: 100
      },
      {
        name: "Number of arms",
        min: 3,
        max: 20,
        start: 5
      },
      {
        name: "Dimensions",
        min: 3,
        max: 50,
        start: 10
      }
    ],
    generator: generators.star
  },
  {
    name: "Linked Clusters",
    description: "Clusters linked with a chain of points",
    options: [
      {
        name: "Number of clusters",
        min: 3,
        max: 20,
        start: 6
      },
      {
        name: "Points per cluster",
        min: 10,
        max: 100,
        start: 30
      },
      {
        name: "Points per link",
        min: 5,
        max: 100,
        start: 15
      },
      {
        name: "Dimensions",
        min: 3,
        max: 100,
        start: 10
      }
    ],
    generator: generators.linkedClusters
  },
  {
    name: "Rotated lines",
    description:
      "nxn images of a line rotated smoothly around the center, represented as an n*n dimensional vector.",
    options: [
      {
        name: "Number of lines",
        min: 10,
        max: 200,
        start: 50
      },
      {
        name: "Pixels per side",
        min: 5,
        max: 28,
        start: 10
      }
    ],
    generator: generators.continuousLineImages,
    previewOverride: generators.linePreview
  },
  {
    name: "Rotated lines, clustered",
    description:
      "nxn images of a line rotated around the center, represented as an n*n dimensional vector. Grouped by similar angles.",
    options: [
      {
        name: "Number of lines",
        min: 10,
        max: 200,
        start: 50
      },
      {
        name: "Number of clusters",
        min: 3,
        max: 12,
        start: 5
      },
      {
        name: "Noise",
        min: 0,
        max: 100,
        start: 8
      },
      {
        name: "Pixels per side",
        min: 5,
        max: 28,
        start: 10
      }
    ],
    generator: generators.clusteredLineImages,
    previewOverride: generators.lineClusterPreview
  },
  {
    name: "Sine frequency",
    description:
      "Vectors of a sine wave parameterized by frequency. Hue corresponds to frequency.",
    options: [
      {
        name: "Number of vectors",
        min: 10,
        max: 200,
        start: 50
      },
      {
        name: "Vector size",
        min: 3,
        max: 300,
        start: 100
      }
    ],
    generator: generators.sineFrequency,
    previewOverride: generators.sineFreqPreview
  },
  {
    name: "Sine phase",
    description:
      "Vectors of a sine wave parameterized by phase. Hue corresponds to phase.",
    options: [
      {
        name: "Number of vectors",
        min: 10,
        max: 200,
        start: 50
      },
      {
        name: "Vector size",
        min: 3,
        max: 300,
        start: 100
      }
    ],
    generator: generators.sinePhase,
    previewOverride: generators.sinePhasePreview
  }
];

export const demos = [
  {
    name: "Grid",
    description: "A square grid with equal spacing between points.",
    options: [
      {
        name: "Points Per Side",
        min: 5,
        max: 20,
        start: 10
      }
    ],
    generator: generators.gridData
  },
  {
    name: "Two Clusters",
    description: "Two clusters with equal numbers of points.",
    options: [
      {
        name: "Points Per Cluster",
        min: 10,
        max: 100,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 100,
        start: 2
      }
    ],
    generator: generators.twoClustersData
  },
  {
    name: "Three Clusters",
    description:
      "Three clusters with equal numbers of points, but at " +
      "different distances from each other.",
    options: [
      {
        name: "Points Per Cluster",
        min: 10,
        max: 100,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 100,
        start: 2
      }
    ],
    generator: generators.threeClustersData
  },
  {
    name: "Two Different-Sized Clusters",
    description:
      "Two clusters with equal numbers of points, but different " +
      "variances within the clusters.",
    options: [
      {
        name: "Points Per Cluster",
        min: 10,
        max: 100,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 100,
        start: 2
      },
      {
        name: "Scale",
        min: 1,
        max: 10,
        start: 5
      }
    ],
    generator: generators.twoDifferentClustersData
  },
  {
    name: "Two Long Linear Clusters",
    description:
      "Two sets of points, arranged in parallel lines that " +
      "are close to each other. Note curvature of lines.",
    options: [
      {
        name: "Points Per Cluster",
        min: 10,
        max: 100,
        start: 50
      }
    ],
    generator: generators.longClusterData
  },
  {
    name: "Cluster In Cluster",
    description: "A dense, tight cluster inside of a wide, sparse cluster.",
    options: [
      {
        name: "Points Per Cluster",
        min: 10,
        max: 100,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 100,
        start: 2
      }
    ],
    generator: generators.subsetClustersData
  },
  {
    name: "Circle (Evenly Spaced)",
    description:
      "Points evenly distributed in a circle. " +
      "Hue corresponds to angle in the circle.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 100,
        start: 50
      }
    ],
    generator: generators.circleData
  },
  {
    name: "Circle (Randomly Spaced)",
    description:
      "Points randomly distributed in a circle. " +
      "Hue corresponds to angle in the circle.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 100,
        start: 50
      }
    ],
    generator: generators.randomCircleData
  },
  {
    name: "Gaussian Cloud",
    description:
      "Points in a unit Gaussian distribution. " +
      "Data is entirely random, so any visible subclusters are " +
      "not statistically significant",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 500,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 100,
        start: 2
      }
    ],
    generator: generators.gaussianData
  },
  {
    name: "Ellipsoidal Gaussian Cloud",
    description:
      "Points in an ellipsoidal Gaussian distribution. " +
      " Dimension n has variance 1/n. Elongation is visible in plot.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 500,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 100,
        start: 2
      }
    ],
    generator: generators.longGaussianData
  },
  {
    name: "Trefoil Knot",
    description:
      "Points arranged in 3D, following a trefoil knot. " +
      "Different runs may give different results.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 200,
        start: 50
      }
    ],
    generator: generators.trefoilData
  },
  {
    name: "Linked Rings",
    description: "Points arranged in 3D, on two linked circles. ",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 200,
        start: 50
      }
    ],
    generator: generators.linkData
  },
  {
    name: "Unlinked Rings",
    description: "Points arranged in 3D, on two unlinked circles",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 200,
        start: 50
      }
    ],
    generator: generators.unlinkData
  },
  {
    name: "Orthogonal Steps",
    description:
      "Points related by mutually orthogonal steps. " +
      "Very similar to a random walk.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 500,
        start: 50
      }
    ],
    generator: generators.orthoCurve
  },
  {
    name: "Random Walk",
    description: "Random (Gaussian) walk. " + "Smoother than you might think.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 1000,
        start: 100
      },
      {
        name: "Dimension",
        min: 1,
        max: 1000,
        start: 100
      }
    ],
    generator: generators.randomWalk
  },
  {
    name: "Random Jump",
    description: "Random (Gaussian) Jump",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 1000,
        start: 100
      },
      {
        name: "Dimension",
        min: 1,
        max: 1000,
        start: 100
      }
    ],
    generator: generators.randomJump
  },
  {
    name: "Equally Spaced",
    description:
      "A set of points, where distances between all pairs of " +
      "points are the same in the original space.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 100,
        start: 50
      }
    ],
    generator: generators.simplexData
  },
  {
    name: "Uniform Distribution",
    description: "Points uniformly distributed in a unit cube.",
    options: [
      {
        name: "Number Of Points",
        min: 20,
        max: 200,
        start: 50
      },
      {
        name: "Dimensions",
        min: 1,
        max: 10,
        start: 3
      }
    ],
    generator: generators.cubeData
  }
];

export const allDemos = [...extendedDemos, ...demos];

// Euclidean distance.
function dist(a, b) {
  var d = 0;
  for (var i = 0; i < a.length; i++) {
    d += (a[i] - b[i]) * (a[i] - b[i]);
  }
  return Math.sqrt(d);
}

// Creates distance matrix for t-SNE input.
export function distanceMatrix(points) {
  var matrix = [];
  var n = points.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      matrix.push(dist(points[i], points[j]));
    }
  }
  return matrix;
}
